import React, { Component } from "react";
import { Select, Form, message } from "antd";
import CustomButton from "./../../reusable/form/custom-button/custom-button.component";
import "./assign-review.style.scss";
import axios from "axios";
const { Option } = Select;

class ReviewAssign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      children: [],
      employeeData: "",
      valuesToSend: "",
      currentUser: this.props.location.pathname.split("/")[2],
    };
  }

  formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  componentDidMount() {
    let self = this;
    axios
      .get("http://localhost:2000/api/employee/?selectFields=_id,employeeName")
      .then(function (response) {
        self.setState((state, props) => {
          return {
            employeeData: response.data.data,
          };
        });

        self.state.employeeData.map((employee) => {
          if (self.state.currentUser != employee._id) {
            var joined = self.state.children.concat(
              <Option key={employee._id}>{employee.employeeName}</Option>
            );
            self.setState({
              children: joined,
            });
          }
        });
      })
      .catch(function (error) {
        message.error("Error fetching data", 3);
      });
  }

  handleChange = (value) => {
    this.setState({
      valuesToSend: value,
    });
  };

  redirectToEmployee = () => {
    this.props.history.push("/employees");
  };

  onFinish = (values) => {
    axios
      .post("http://localhost:2000/api/employee/pendingReviews", {
        pendingReviewsList: this.state.valuesToSend,
        employeeId: this.state.currentUser,
      })
      .then((response) => {
        if (response.status == 200) {
          message.success("Successful ! ", 3);
          this.props.history.push("/employees");
        } else {
          message.error("Error", 3);
          this.props.history.push("/employees");
        }
      });
  };

  render() {
    if (this.state.children) {
      return (
        <div className="formWrapper">
          <Form
            {...this.formItemLayout}
            name="register"
            onFinish={this.onFinish}
            size="large"
            scrollToFirstError
          >
            <Form.Item
              name="selectEmployees"
              label="Select Employees"
              rules={[
                {
                  required: true,
                  message:
                    "Please select employees you want to help with this review!",
                },
              ]}
            >
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Please select"
                onChange={this.handleChange}
              >
                {this.state.children}
              </Select>
            </Form.Item>

            <Form.Item {...this.tailFormItemLayout}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CustomButton type="submit">Add</CustomButton>
                <CustomButton type="button" onClick={this.redirectToEmployee}>
                  Cancel
                </CustomButton>
              </div>
            </Form.Item>
          </Form>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ReviewAssign;
