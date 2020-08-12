import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import EmployeeProfile from "../../components/app/employee/employee-profile/employee-profile.component";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileDetails: "",
    };
  }

  componentDidMount() {
    let self = this;
    axios
      .get(
        "http://localhost:2000/api/employee/view?employeeId=" +
          this.props.match.params.id
      )
      .then((response) => {
        self.setState({
          profileDetails: response.data.data[0],
        });
      });
  }

  render() {
    if (this.state.profileDetails) {
      return (
        <EmployeeProfile
          employeeId={this.props.match.params.id}
          employeeDetail={this.state.profileDetails}
        ></EmployeeProfile>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Profile);
