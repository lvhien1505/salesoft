import React, { Fragment } from "react";
import { Select } from "antd";

const SelectRecord = () => {
  const options = [
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];

  return (
    <Fragment>
      <span>Số bản ghi</span>
      <div>
        <Select options={options} defaultValue={10}/>
      </div>
    </Fragment>
  );
};

export default SelectRecord;
