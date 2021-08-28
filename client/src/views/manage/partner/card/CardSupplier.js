import React, { Fragment } from "react";
import { Checkbox, Radio } from "antd";
import Card from "../../../../components/card/Card";
import { InputString } from "../../../../components/atoms/input";
import "../../../../sass/app/views/card.scss";

const CardSupplier = () => {
  const options = [
    { label: "Hàng hóa", value: "hanghoa" },
    { label: "Dịch vụ", value: "dichvu" },
    { label: "Combo - Đóng gói", value: "combo" },
  ];

  const optionsRadio = [
    { label: "Tất cả", value: "tatca" },
    { label: "Dưới định mức tồn", value: "duoiton" },
    { label: "Vượt định mức tồn", value: "trenton" },
    { label: "Còn hàng trong kho", value: "conhang" },
    { label: "Hết hàng trong kho", value: "hethang" },
  ];
  return (
    <Fragment>
      <Card title="Nhóm nhà cung cấp"></Card>
      <Card title="Tổng mua"></Card>
      <Card title="Nợ hiện tại"></Card>
      <Card title="Trạng thái"></Card>
    </Fragment>
  );
};

export default CardSupplier;
