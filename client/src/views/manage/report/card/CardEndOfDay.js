import React, { Fragment } from "react";
import Card from "../../../../components/card/Card";
import "../../../../sass/app/views/card.scss";

const CardEndOfDay = () => {
  return (
    <Fragment>
      <Card title="Xuất file"></Card>
      <Card title="Kiểu hiển thị"></Card>
      <Card title="Mối quan tâm"></Card>
      <Card title="Thời gian"></Card>
      <Card title="Nhân viên"></Card>
      <Card title="Người tạo"></Card>
    </Fragment>
  );
};

export default CardEndOfDay;
