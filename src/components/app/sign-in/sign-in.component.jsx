import React, { Component } from "react";
import FormInput from "./../reusable/form/form-input/form-input.component";
import CustomButton from "./../reusable/form/custom-button/custom-button.component";
import axios from "axios";
import "./sign-in.style.scss";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:2000/api/employee/login", {
        employeeEmail: this.state.email,
        employeePassword: this.state.password,
      })
      .then((response) => {
        if (response.data.success == true) {
          localStorage.setItem(
            "employee",
            JSON.stringify(response.data.employeeData)
          );

          if (response.data.employeeData.employee.role == "admin") {
            this.props.history.push("/employees");
          } else {
            this.props.history.push(
              "/profile/" + response.data.employeeData.employee._id
            );
          }
        }
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h1 style={{ fontWeight: "bold" }}>Employee Review Portal</h1>
        <h2>Sign in with Email and Password</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            autocomplete="off"
            handleChange={this.handleChange}
            label="Email"
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            autocomplete="off"
            required
            label="Password"
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
