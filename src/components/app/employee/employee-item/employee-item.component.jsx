import React, { Component } from "react";
import "./employee-item.style.scss";

const EmployeeItem = ({ id, employeeName }) => {
  return (
    <div id={id} className="collection-item">
      <div className="collection-item">{employeeName}</div>
    </div>
  );
};

export default EmployeeItem;
