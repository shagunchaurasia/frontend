import React from "react";
import "./review-list.style.scss";
import { Button } from "antd";
import EmployeeReview from "./../employee-review/employee-review.component";
import { withRouter } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
const Panel = Collapse.Panel;

const ReviewList = ({ employeeData, history }) => {
  const reviewAdd = (employeeId) => {
    history.push("/reviewAdd/" + employeeId);
  };
  if (employeeData.length) {
    return (
      <div style={{ marginTop: "50px" }}>
        {employeeData.map((employee) => {
          return (
            <Collapse
              style={{
                backgroundColor: "#95c8ff",
                margin: "10px",
              }}
            >
              <Panel
                header={employee.employeeName + " | " + employee.employeeEmail}
                style={{ fontWeight: 600, fontSize: "16px" }}
              >
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <em>Reviews for {employee.employeeName}</em>
                  <Button onClick={() => reviewAdd(employee._id)}>
                    <StarOutlined
                      twoToneColor="#eb2f96"
                      style={{ fontSize: "20px" }}
                    />
                  </Button>
                </p>
                <EmployeeReview employeeId={employee._id}></EmployeeReview>
              </Panel>
            </Collapse>
          );
        })}
      </div>
    );
  } else {
    return "No Reviews Found";
  }
};

export default withRouter(ReviewList);
