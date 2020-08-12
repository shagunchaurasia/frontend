import React, { Component } from "react";
import { Form, Input, message, Select } from "antd";
import CustomButton from "../../reusable/form/custom-button/custom-button.component";
import axios from "axios";
import { withRouter } from "react-router-dom";

const EmployeeForm = ({ initialValues, history, location }) => {
  const onFinish = (values) => {
    axios
      .put("http://localhost:2000/api/employee", {
        employeeName: values.employeeName,
        employeeEmail: values.employeeEmail,
        employeeAddress: values.employeeAddress,
        employeeCity: values.employeeCity,
        employeeDepartment: values.employeeDepartment,
        employeeState: values.employeeState,
        employeePhone: values.employeePhone,
        employeeId: location.pathname.split("/")[2],
      })
      .then((response) => {
        if (response.status == 200) {
          message.success("Employee Successfully Updated ! ", 3);
          history.push("/employees");
        } else {
          message.error("Error Updating Employee", 3);
          history.push("/employees");
        }
      });
  };

  const formItemLayout = {
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
  const tailFormItemLayout = {
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

  const redirectToEmployee = () => {
    history.goBack();
  };

  return (
    <Form
      {...formItemLayout}
      name="register"
      initialValues={initialValues}
      onFinish={onFinish}
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

      <Form.Item {...tailFormItemLayout}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CustomButton type="submit">Update</CustomButton>
          <CustomButton type="button" onClick={redirectToEmployee}>
            Cancel
          </CustomButton>
        </div>
      </Form.Item>
    </Form>
  );
};

export default withRouter(EmployeeForm);
