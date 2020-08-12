import React, { Component } from "react";
import { Card, Progress } from "antd";
import { Descriptions, Table } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import EmployeeReview from "../../review/employee-review/employee-review.component";

const { Meta } = Card;

const EmployeeProfile = ({ employeeDetail }) => {
  let percentage;
  let averageRatingArray = employeeDetail.averageRating;
  percentage =
    averageRatingArray.reduce((a, b) => a + b, 0) / averageRatingArray.length;
  return (
    <div style={{ marginTop: "60px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Card hoverable style={{ width: "20%", textAlign: "center" }}>
          <Avatar
            size={70}
            style={{ position: "absolute", top: "-20%", left: "35%" }}
            icon={<UserOutlined />}
          ></Avatar>

          <Meta
            title={employeeDetail.employeeName}
            // description={`Rating ${employeeDetail.employeeName}`}
            style={{ marginTop: "10%" }}
          />
          <Progress
            type="circle"
            strokeColor={{
              "0": "#108ee9",
              "10": "#87d068",
            }}
            style={{ marginTop: "20px" }}
            width={90}
            percent={(percentage / 10) * 100}
            format={(percent) => `${percentage} `}
            strokeWidth={10}
          />
        </Card>
        <Card style={{ width: "78%" }}>
          <Descriptions title="Employee Info">
            <Descriptions.Item label="Employee Name">
              {employeeDetail.employeeName}
            </Descriptions.Item>
            <Descriptions.Item label="Telephone">
              {employeeDetail.employeePhone}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {employeeDetail.employeeEmail}
            </Descriptions.Item>
            <Descriptions.Item label="Department">
              {employeeDetail.employeeDepartment}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {employeeDetail.employeeAddress}
            </Descriptions.Item>
            <Descriptions.Item label="City">
              {employeeDetail.employeeCity}
            </Descriptions.Item>
            <Descriptions.Item label="State">
              {employeeDetail.employeeState}
            </Descriptions.Item>
            <Descriptions.Item label="Added On">
              {employeeDetail.addedOn}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
      <br />
      <br />
      {/* <Table></Table> */}
      <EmployeeReview employeeId={employeeDetail._id}></EmployeeReview>
    </div>
  );
};

export default EmployeeProfile;
