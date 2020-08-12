import React from "react";
import "./signInRegister.style.scss";
import SignIn from "../../components/app/sign-in/sign-in.component";

const SignInRegister = () => {
  return (
    <div className="wrapper">
      <div className="backgroundWrapper"></div>
      <div className="signInWrapper">
        <SignIn></SignIn>
      </div>
    </div>
  );
};

export default SignInRegister;
