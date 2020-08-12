import React, { Component } from "react";
import EmployeeList from "./../../components/app/employee/employee-list/employee-list.component";
import { Link } from "react-router-dom";
import { message } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import axios from "axios";
import CustomButton from "../../components/app/reusable/form/custom-button/custom-button.component";
class Employees extends Component {
  constructor() {
    super();
    this.state = {
      employeeData: [],
    };
  }

  componentDidMount() {
    var self = this;

    axios
      .get("http://localhost:2000/api/employee")
      .then(function (response) {
        self.setState((state, props) => {
          return {
            employeeData: response.data.data,
          };
        });
      })
      .catch(function (error) {
        message.error("Error fetching data", 3);
      });
  }
  render() {
    return (
      <div>
        <Link to="/employeeAdd">
          <CustomButton
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
          >
            Add Employee
          </CustomButton>
        </Link>
        <br />
        <br />

        <EmployeeList employeeData={this.state.employeeData}></EmployeeList>
      </div>
    );
  }
}

export default Employees;
