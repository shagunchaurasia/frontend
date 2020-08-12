import React, { Component } from "react";
import ReviewList from "./../../components/app/review/review-list/review-list.component";
import axios from "axios";
import { message } from "antd";
class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
    };
  }

  componentDidMount() {
    var self = this;

    const roleLoggedIn = JSON.parse(localStorage.getItem("employee")).employee
      .role;
    const employeeLoggedIn = JSON.parse(localStorage.getItem("employee"))
      .employee._id;

    if (roleLoggedIn == "admin") {
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
    } else {
      axios
        .get("http://localhost:2000/api/employee/assigned/" + employeeLoggedIn)
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
  }

  render() {
    return (
      <div>
        {this.state.employeeData ? (
          <ReviewList employeeData={this.state.employeeData}></ReviewList>
        ) : null}
      </div>
    );
  }
}

export default Reviews;
