import React, { Fragment } from "react";
import Card from "../../../../components/card/Card";
import {InputString} from '../../../../components/atoms/input';
import '../../../../sass/app/views/card.scss';

const CardPriceBook = () => {
  return (
    <Fragment>
      <Card
        title="Bảng giá"
        icon={<i className="ri-add-circle-line" title="Thêm bảng giá" />}
      ></Card>
      <Card title="Nhóm hàng" addClass="card-category-product">
        <InputString
          placeholder={"Tìm kiếm nhóm hàng"}
          prefix={<i className="ri-search-line" />}
        />
        <div className="list-category_mechandise">
          <div className="item-category_selected item-category_merchandise">
            <span>Tất cả</span>
          </div>
        </div>
      </Card>
      <Card title="Giá bán"></Card>
    </Fragment>
  );
};

export default CardPriceBook;
