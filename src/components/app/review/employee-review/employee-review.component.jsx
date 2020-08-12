import React, { Component } from "react";
import { Table, message } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
class EmployeeReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeReview: "",
    };
  }

  componentDidMount() {
    let self = this;
    axios
      .get("http://localhost:2000/api/review/employee/" + this.props.employeeId)

      .then(function (response) {
        self.setState((state, props) => {
          return {
            employeeReview: response.data.data,
          };
        });
      })
      .catch(function (error) {
        message.error("Error fetching data", 3);
      });
  }

  render() {
    let columns = [
      {
        title: "Review Title",
        dataIndex: "reviewTitle",
        key: "reviewTitle",
      },
      {
        title: "Rating",
        dataIndex: "rating",
        key: "rating",
      },

      {
        title: "Review Description",
        dataIndex: "reviewDescription",
        key: "reviewDescription",
      },
      {
        title: "Review Title",
        dataIndex: "reviewTitle",
        key: "reviewTitle",
      },
      {
        title: "Added By",
        dataIndex: "addedByEmployeeName",
        key: "addedByEmployeeName",
      },
    ];

    columns.push({
      title: "Edit",
      key: "action",
      render: (text, record) => (
        <Link to={`/reviewAdd/${record._id}`}>
          <EditOutlined twoToneColor="#eb2f96" style={{ fontSize: "20px" }} />
        </Link>
      ),
    });

    return (
      <div>
        {this.state.employeeReview ? (
          <Table
            columns={columns}
            dataSource={this.state.employeeReview}
            pagination={false}
          ></Table>
        ) : null}
      </div>
    );
  }
}

export default EmployeeReview;
