import React, { Fragment } from "react";
import { Checkbox, Radio } from "antd";
import Card from "../../../../components/card/Card";
import { InputString } from "../../../../components/atoms/input";
import "../../../../sass/app/views/card.scss";

const CardCashFlow = () => {
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
      <Card title="Tài khoản"></Card>
      <Card title="Thời gian"></Card>
      <Card title="Loại chứng từ"></Card>
      <Card title="Loại thu chi"></Card>
      <Card title="Trạng thái"></Card>
      <Card title="Kết quả kinh doanh"></Card>
      <Card title="Người tạo"></Card>
      <Card title="Nhân viên"></Card>
      <Card title="Đối tượng nộp/nhận"></Card>
    </Fragment>
  );
};

export default CardCashFlow;
