import React, { Component } from "react";
import { Form, Input, message, InputNumber } from "antd";
import CustomButton from "../../reusable/form/custom-button/custom-button.component";
import axios from "axios";
import { withRouter } from "react-router-dom";

const ReviewForm = ({ initialValues, history, location }) => {
  const onFinish = (values) => {
    axios
      .put("http://localhost:2000/api/review", {
        reviewTitle: values.reviewTitle,
        reviewDescription: values.reviewDescription,
        rating: values.rating,
        reviewId: location.pathname.split("/")[2],
        modifiedBy: JSON.parse(localStorage.getItem("employee")).employee._id,
      })
      .then((response) => {
        if (response.data.status == true) {
          message.success("Review Successfully Added ! ", 3);
          history.push("/reviews");
        } else {
          message.error("Error Adding Review", 3);
          history.push("/reviews");
        }
      })
      .catch((error) => {
        message.error("Error Adding Review", 3);
        history.push("/reviews");
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

  const redirectBack = () => {
    history.goBack();
  };

  return (
    <div className="formWrapper">
      <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        size="large"
        scrollToFirstError
        initialValues={initialValues}
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

        <Form.Item {...tailFormItemLayout}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <CustomButton type="submit">Add</CustomButton>
            <CustomButton type="button" onClick={redirectBack}>
              Cancel
            </CustomButton>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(ReviewForm);
