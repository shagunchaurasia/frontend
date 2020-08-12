import React, { Component } from "react";
import axios from "axios";
import "./review-add.style.scss";
import ReviewForm from "./review-form.component";
import { Form, Input, message, InputNumber } from "antd";
import "./review-add.style.scss";
import CustomButton from "../../reusable/form/custom-button/custom-button.component";

class ReviewAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialValues: null,
      reviewId: this.props.location.pathname.split("/")[2],
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

  redirectBack = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    if (this.state.reviewId) {
      let self = this;
      axios
        .get(
          "http://localhost:2000/api/review/view?reviewId=" +
            self.state.reviewId
        )
        .then(function (response) {
          self.setState((state, props) => {
            return {
              initialValues: response.data.data[0],
            };
          });
        })
        .catch(function (error) {
          message.error("Error fetching data", 3);
        });
    } else {
      this.setState({
        initialValues: "",
      });
    }
  }
  onFinish = (values) => {
    axios
      .post("http://localhost:2000/api/review", {
        reviewTitle: values.reviewTitle,
        reviewDescription: values.reviewDescription,
        rating: values.rating,
        employeeId: this.props.location.pathname.split("/")[2],
        addedByEmployeeId: JSON.parse(localStorage.getItem("employee")).employee
          ._id,
        addedByEmployeeName: JSON.parse(localStorage.getItem("employee"))
          .employee.employeeName,
      })
      .then((response) => {
        if (response.data.status == true) {
          message.success("Review Successfully Added ! ", 3);
          this.props.history.push("/reviews");
        } else {
          message.error("Error Adding Review", 3);
          this.props.history.push("/reviews");
        }
      })
      .catch((error) => {
        message.error("Error Adding Review", 3);
        this.props.history.push("/reviews");
      });
  };

  render() {
    if (this.state.initialValues) {
      return <ReviewForm initialValues={this.state.initialValues} />;
    } else {
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
              name="reviewTitle"
              label="Title"
              rules={[
                {
                  required: true,
                  message: "Please input your Review Title!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="reviewDescription"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please input your Review!",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              name="rating"
              label="Rating"
              rules={[
                {
                  required: true,
                  message: "Please input  Rating!",
                },
              ]}
            >
              <InputNumber min={1} max={10} />
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
                <CustomButton type="button" onClick={this.redirectBack}>
                  Cancel
                </CustomButton>
              </div>
            </Form.Item>
          </Form>
        </div>
      );
    }
  }
}

export default ReviewAdd;
