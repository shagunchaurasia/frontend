import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Profile from "../../routes/profile/profile.component";
import Employees from "../../routes/employees/employees.component";
import EmployeeAdd from "../../components/app/employee/employee-add/employee-add.component";
import Reviews from "../../routes/reviews/reviews.component";
import Header from "./header/header.component";
import SignInRegister from "../../routes/signIn-register/signInRegister.component";
import { withRouter } from "react-router-dom";
import ReviewAdd from "./../app/review/review-add/review-add.component";
import ReviewAssign from "./../app/review/assign-review/assign-review.component";
import { Layout, Menu, Breadcrumb } from "antd";

const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    if (!localStorage.getItem("employee")) {
      this.props.history.push("/signIn-Register");
    }
  }
  render() {
    const loggedInStatus = localStorage.getItem("employee");

    return (
      <div className="App">
        {loggedInStatus ? <Header></Header> : null}
        <Content style={{ padding: "0 50px" }}>
          <Switch>
            <Route exact path="/profile/:id" component={Profile}></Route>

            <Route exact path="/employees" component={Employees}></Route>
            <Route exact path="/employeeAdd" component={EmployeeAdd}></Route>
            <Route
              exact
              path="/employeeAdd/:id"
              component={EmployeeAdd}
            ></Route>
            <Route exact path="/reviews" component={Reviews}></Route>
            <Route
              exact
              path="/signIn-Register"
              component={SignInRegister}
            ></Route>
            <Route
              exact
              path="/reviewAdd/:employeeId"
              component={ReviewAdd}
            ></Route>
            <Route
              exact
              path="/reviewAssign/:employeeId"
              component={ReviewAssign}
            ></Route>
          </Switch>
        </Content>
      </div>
    );
  }
}

export default withRouter(App);
