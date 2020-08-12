import React from "react";
import { Table } from "antd";

const CustomizedTable = ({
  columnsPassed,
  dataPassed,
  classPassed,
  expandablePassed,
  paginationPassed,
}) => {
  return (
    <Table
      columns={columnsPassed}
      dataSource={dataPassed}
      className={classPassed}
      expandable={expandablePassed}
      pagination={paginationPassed}
    ></Table>
  );
};

export default CustomizedTable;
