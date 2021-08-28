import React from "react";
import { AutoComplete, Select } from "antd";
import "../../../sass/app/components/atoms.scss";

const AutoCompleteCustom = ({ ...rest }) => {
  return (
    <div className="wrapper-select">
      <AutoComplete
        {...rest}
        className="default-select"
        bordered={false}
      ></AutoComplete>
    </div>
  );
};

const SelectCustom = ({ ...rest }) => {
  return (
    <div className="wrapper-select">
      <Select
        {...rest}
        className="default-select"
        bordered={false}
      ></Select>
    </div>
  );
};

export { AutoCompleteCustom,SelectCustom };
