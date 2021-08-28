import React, { Fragment, useState,useContext } from "react";
import { Button, Image, Row, Col, Select } from "antd";
import Pop from "../Pop";
import Pagination from "../../page/Pagination";
import { NumberCurrency,InputString } from "../../atoms/input";
import PropTypes from "prop-types";
import {SaleContext} from '../../../state/context/Context'
import defaultImg from "../../../assets/img/default-img.jpg";
import products from '../../../json/products.json'
import "../../../sass/app/components/pop.scss";

const PopProducts = ({ visible, onCancel }) => {
  let state = useContext(SaleContext);
  const {dispatch} = state;

  const onSelectProduct = (product) => {
     dispatch({type:"SELECT_PRODUCT",payload:{
         product:product
     }})
  };

  return (
    <Pop title="Hàng hóa" visible={visible} onCancel={onCancel}>
      <div className="product-pop-content">
        <div>
          <InputString
            prefix={<i className="ri-search-line" />}
            placeholder="Tìm kiếm mặt hàng"
          />
        </div>
        <div className="product-screen">
          <div className="header-screen">
            <div className="btn-action">
              <Button
                type="primary"
                icon={<i className="ri-restart-line" />}
                title="Reset"
              />
              <Button
                type="primary"
                icon={<i className="ri-filter-fill" />}
                title="Lọc theo thuộc tính"
              />
              <Button
                type="primary"
                icon={<i className="ri-function-fill" />}
                title="Lọc theo nhóm hàng"
              />
              <div className="price-table">
                <Select defaultValue="common" className="pricetable-select">
                  <Select.Option value="common">Bảng giá chung</Select.Option>
                </Select>
              </div>
            </div>

            <div className="pagination">
              <Pagination type="input" />
            </div>
          </div>
          <div className="product-list">
            <Row gutter={[8, 8]} wrap>
              {products.products.map((product, key) => (
                <Fragment key={key}>
                  <Col span={8} onClick={() => onSelectProduct(product)}>
                    <div
                      // title={`${product.name} - Tồn : ${product.inventory}`}
                      className="product-item"
                    >
                      <Image
                        src={defaultImg}
                        preview={false}
                        width={65}
                        height={80}
                      />
                      <div className="product-info">
                        <span>{product.name}</span>
                        <span>
                          <NumberCurrency value={product.price} />
                        </span>
                      </div>
                    </div>
                  </Col>
                </Fragment>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </Pop>
  );
};

PopProducts.defaultProps = {
  visible: false,
  onCancel: () => null,
};
PopProducts.propTypes = {
  visible: PropTypes.bool,
};

export default PopProducts;
