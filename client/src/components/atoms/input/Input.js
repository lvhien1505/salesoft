import React from "react";
import { Input, AutoComplete } from "antd";
import NumberFormat from "react-currency-format";
import "../../../sass/app/components/atoms.scss";

const InputString = ({ ...rest }) => {
  return (
    <div className="wrapper-input">
      <Input {...rest} className="default-input"></Input>
    </div>
  );
};

const TextArea = ({ ...rest }) => {
  return (
    <div className="wrapper-input">
      <Input.TextArea {...rest} className="default-input"></Input.TextArea>
    </div>
  );
};

const InputNumber = ({ value, ...rest }) => {
  return (
    <div className="wrapper-input">
      <NumberFormat
        thousandSeparator={true}
        value={value}
        {...rest}
        className="default-input"
      />
    </div>
  );
};

const NumberCurrency = ({ value, ...rest }) => {
  return (
    <NumberFormat
      thousandSeparator={true}
      value={value}
      {...rest}
      displayType="text"
      renderText={(value) => value}
    />
  );
};

export { InputString, TextArea, InputNumber, NumberCurrency };
