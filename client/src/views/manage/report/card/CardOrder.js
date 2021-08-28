import React, { Fragment } from "react";
import Card from "../../../../components/card/Card";
import "../../../../sass/app/views/card.scss";

const CardOrder = () => {
  return (
    <Fragment>
      <Card title="Xuất file"></Card>
      <Card title="Kiểu hiển thị"></Card>
      <Card title="Mối quan tâm"></Card>
      <Card title="Thời gian"></Card>
      <Card title="Trạng thái"></Card>
      <Card title="Khách hàng"></Card>
      <Card title="Hàng hóa"></Card>
      <Card title="Loại hàng"></Card>
      <Card title="Nhóm hàng"></Card>
      <Card title="Nhân viên"></Card>
    </Fragment>
  );
};

export default CardOrder;
