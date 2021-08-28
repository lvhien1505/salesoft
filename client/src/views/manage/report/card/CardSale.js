import React, { Fragment } from "react";
import Card from "../../../../components/card/Card";
import "../../../../sass/app/views/card.scss";

const CardSale = () => {
  return (
    <Fragment>
      <Card title="Xuất file"></Card>
      <Card title="Kiểu hiển thị"></Card>
      <Card title="Mối quan tâm"></Card>
      <Card title="Bảng giá"></Card>
      <Card title="Thời gian"></Card>
      <Card title="Phương thức bán hàng"></Card>
    </Fragment>
  );
};

export default CardSale;
