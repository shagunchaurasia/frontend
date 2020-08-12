import React from "react";
import "./employee-list.style.scss";
import CustomizedTable from "../../reusable/customized-table/customized-table.component";
import { Link } from "react-router-dom";
import { Button, message } from "antd";
import {
  EyeOutlined,
  StarOutlined,
  UserSwitchOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import axios from "axios";

const EmployeeList = ({ employeeData }) => {
  function deleteEmployee(record) {
    axios
      .delete("http://localhost:2000/api/employee", {
        data: {
          employeeId: record,
        },
      })
      .then((response) => {
        message.success("Employee Successfully Deleted ! ", 3);
        window.location = window.location;
      });
  }
  const columns = [
    {
      title: "View",
      key: "action",
      render: (text, record) => (
        <Link to={`/profile/${record._id}`}>
          <EyeOutlined style={{ fontSize: "20px" }} />
        </Link>
      ),
    },

    {
      title: "Name",
      dataIndex: "employeeName",
    },
    {
      title: "Email",
      dataIndex: "employeeEmail",
    },
    {
      title: "Phone",
      dataIndex: "employeePhone",
    },
    {
      title: "Department",
      dataIndex: "employeeDepartment",
    },
    {
      title: "Address",
      dataIndex: "employeeAddress",
    },
    {
      title: "City",
      dataIndex: "employeeCity",
    },
    {
      title: "State",
      dataIndex: "employeeState",
    },
    {
      title: "Rating",
      dataIndex: "averageRating",
    },

    {
      title: "Edit User",
      key: "edit",
      render: (text, record) => (
        <Link to={`/employeeAdd/${record._id}`}>
          <EditOutlined twoToneColor="#eb2f96" style={{ fontSize: "20px" }} />
        </Link>
      ),
    },

    {
      title: "Delete User",
      key: "delete",
      render: (text, record) => (
        <Button onClick={() => deleteEmployee(record._id)}>
          <DeleteOutlined
            style={{ fontSize: "20px", cursor: "pointer", color: "#eb4034" }}
          />
        </Button>
      ),
    },
    {
      title: "Add Review",
      key: "action",
      render: (text, record) => (
        <Link to={`/reviewAdd/${record._id}`}>
          <StarOutlined twoToneColor="#eb2f96" style={{ fontSize: "20px" }} />
        </Link>
      ),
    },
    {
      title: "Assign Review",
      key: "action",
      render: (text, record) => (
        <Link to={`/reviewAssign/${record._id}`}>
          <UserSwitchOutlined style={{ fontSize: "20px" }} />
        </Link>
      ),
    },
  ];

  return (
    <div>
      <CustomizedTable
        columnsPassed={columns}
        dataPassed={employeeData}
        paginationPassed={false}
      ></CustomizedTable>
    </div>
  );
};

export default EmployeeList;
