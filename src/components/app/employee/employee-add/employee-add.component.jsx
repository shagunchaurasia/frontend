import React, { Component } from "react";
import axios from "axios";
import { Form, Input, message, Select } from "antd";
import "./employee-add.style.scss";
import EmployeeForm from "./employee-form.component";
import CustomButton from "../../reusable/form/custom-button/custom-button.component";

class EmployeeAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeId: this.props.location.pathname.split("/")[2],
      initialValues: null,
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

  redirectToEmployee = () => {
    this.props.history.push("/employees");
  };
  componentDidMount() {
    if (this.state.employeeId) {
      let self = this;
      axios
        .get(
          "http://localhost:2000/api/employee/view?employeeId=" +
            self.state.employeeId
        )
        .then(function (response) {
          self.setState((state, props) => {
            return {
              initialValues: response.data.data[0],
            };
          });
        })
        .catch(function (error) {
          message.error("Error Fetching Data", 3);
        });
    } else {
      this.setState({
        initialValues: "",
      });
    }
  }

  onFinish = (values) => {
    axios
      .post("http://localhost:2000/api/employee", {
        employeeName: values.employeeName,
        employeeEmail: values.employeeEmail,
        employeeAddress: values.employeeAddress,
        employeeCity: values.employeeCity,
        employeeDepartment: values.employeeDepartment,
        employeeState: values.employeeState,
        employeePhone: values.employeePhone,
        employeePassword: values.employeePassword,
      })
      .then((response) => {
        if (response.data.success == true) {
          message.success("Employee Successfully Added ! ", 3);
          this.props.history.push("/employees");
        } else {
          message.error("Error Adding Employee", 3);
          this.props.history.push("/employees");
        }
      })
      .catch((error) => {
        message.error("Error Adding Employee", 3);
        this.props.history.push("/employees");
      });
  };

  render() {
    if (this.state.initialValues) {
      return <EmployeeForm initialValues={this.state.initialValues} />;
    } else {
      return (
        <Form
          {...this.formItemLayout}
          name="register"
          onFinish={this.onFinish}
          scrollToFirstError
          size="large"
        >
          <Form.Item
            name="employeeName"
            label="Employee Name"
            rules={[
              {
                required: true,
                message: "Please input your Employee Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="employeeEmail"
            label="Employee Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="employeePassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="employeeAddress"
            label="Address"
            rules={[
              {
                required: true,
                message: "Please input the address!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="employeeCity"
            label="City"
            rules={[
              {
                required: true,
                message: "Please enter City!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="employeeState"
            label="State"
            rules={[
              {
                required: true,
                message: "Please enter State !",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="employeeDepartment"
            label="Department"
            rules={[
              {
                required: true,
                message: "Please enter Department !",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="employeePhone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
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
      );
    }
  }
}
export default EmployeeAdd;
