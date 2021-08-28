import React, { useRef, useContext } from "react";
import { Form, Button, Popover, Radio, Checkbox, Row, Col } from "antd";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import PropTypes from "prop-types";
import { AutoComplete } from "../../components/atoms/select";
import {
  NumberCurrency,
  InputNumber,
  TextArea,
} from "../../components/atoms/input";
import ButtonCustom from "../../components/atoms/Button";
import { invoiceTemplate } from "../../cache/printTemplate";
import { SaleContext } from "../../state/context/Context";

const PopOverSaleOffProduct = ({ product }) => {
  let state = useContext(SaleContext);
  const { dispatch } = state;

  const onChangeValue = (value) => {
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    if (value > product.price_unit) {
      value = product.price_unit;
    }
    dispatch({
      type: "SALE_OFF_PRODUCT",
      payload: { product: { _id: product._id, valueSaleOff: value } },
    });
  };

  return (
    <div className="popover-content-saleoff-product">
      <div className="total-price-unit">
        <span className="label-item">Đơn giá</span>
        <span>
          <NumberCurrency value={product.price_unit} />
        </span>
      </div>
      <div className="saleoff-product">
        <span className="label-item">Giảm giá</span>
        <InputNumber
          value={product.sale_off}
          onValueChange={(values) => onChangeValue(values.floatValue)}
        />
      </div>
      <div className="total-price">
        <span className="label-item">Giá bán</span>
        <span>
          <NumberCurrency value={product.price} />
        </span>
      </div>
    </div>
  );
};

const PopOverSaleOff = ({ saleOff, totalPrice }) => {
  let state = useContext(SaleContext);
  const { dispatch } = state;

  const onChangeValue = (value) => {
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    if (value > totalPrice) {
      value = totalPrice;
    }
    dispatch({
      type: "CHANGE_VALUE_PAYMENT",
      payload: { type: "sale_off", valueSaleOff: value },
    });
  };
  return (
    <div className="popover-content-saleoff">
      <div className="saleoff">
        <span className="label-item">Giảm giá</span>
        <InputNumber
          value={saleOff}
          onValueChange={(values) => onChangeValue(values.floatValue)}
        />
      </div>
    </div>
  );
};

const TabContent = ({ tabData, tabType }) => {
  let state = useContext(SaleContext);
  const { dispatch } = state;
  const { Item } = Form;
  const { products, math } = tabData;

  const onChangeTypeTab = (type) => {
    if (tabType === type) return;
    dispatch({ type: "CHANGE_TYPE_TAB", payload: { tabType: type } });
  };

  const onRemoveProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: { id: id } });
  };

  const onResizeNumProduct = (type, product, value) => {
    let num = product.count;
    switch (type) {
      case "incr":
        num++;
        break;
      case "desc":
        num--;
        if (num === 0) {
          num = 1;
        }
        break;
      case "input":
        num = value;
        if (num === 0 || num < 0 || isNaN(num)) {
          num = 1;
        }
        break;
    }
    dispatch({
      type: "RESIZE_NUM_PRODUCT",
      payload: { product: { _id: product.info._id, num: num } },
    });
  };

  const onChangeValuePayment = (value) => {
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    dispatch({
      type: "CHANGE_VALUE_PAYMENT",
      payload: { type: "payment", valuePayment: value },
    });
  };

  const onFinishPayment = (values) => {};

  const configStyleProduct = {
    default: {
      backgroundColor: "#fff",
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.3)",
    },
    other: {
      backgroundColor: "#f9f9f9",
      boxShadow: "none",
      marginTop: "2px",
    },
  };

  return (
    <div className="wrapper-tab-content">
      <Row>
        <Col span={16}>
          <div className="product-cart">
            {products.length > 0
              ? products.map((product, key) => (
                  <div
                    className="product-item"
                    key={key}
                    style={
                      key % 2 == 0
                        ? configStyleProduct.default
                        : configStyleProduct.other
                    }
                  >
                    <div className="left-content">
                      <span>{key + 1}</span>
                      <i
                        className="ri-delete-bin-6-line"
                        title="Xóa"
                        onClick={() => onRemoveProduct(product.info._id)}
                      />
                      <span>SP00{product.info._id}</span>
                      <div className="name-product">
                        <span>{product.info.name}</span>
                        <Popover
                          // content={
                          //   <PopOverNoteProduct
                          //     description={product.product.description}
                          //   />
                          // }
                          placement="bottomLeft"
                          trigger="click"
                        >
                          <span>
                            {" "}
                            Ghi chú... <i className="ri-pencil-line" />
                          </span>
                        </Popover>
                      </div>
                      <div className="control-num-product">
                        <Button
                          icon={<i className="ri-arrow-down-s-line" />}
                          onClick={() => onResizeNumProduct("desc", product)}
                        ></Button>
                        <InputNumber
                          style={{
                            backgroundColor: key % 2 == 0 ? "#fff" : "#f9f9f9",
                          }}
                          value={product.count}
                          onValueChange={(values) =>
                            onResizeNumProduct(
                              "input",
                              product,
                              values.floatValue
                            )
                          }
                        />
                        <Button
                          icon={<i className="ri-arrow-up-s-line" />}
                          onClick={() => onResizeNumProduct("incr", product)}
                        ></Button>
                      </div>
                    </div>
                    <div className="right-content">
                      <Popover
                        content={
                          <PopOverSaleOffProduct
                            product={{
                              _id: product.info._id,
                              price: product.price,
                              price_unit: product.price_unit,
                              sale_off: product.sale_off,
                            }}
                          />
                        }
                        trigger="click"
                        placement="bottomLeft"
                      >
                        <div className="saleoff-product" title="Giảm giá">
                          <span>
                            <NumberCurrency value={product.price} />
                          </span>
                          {product.sale_off > 0 ? (
                            <span>
                              <NumberCurrency
                                value={-product.sale_off}
                                className="value_saleoff"
                              />
                            </span>
                          ) : (
                            <span></span>
                          )}
                        </div>
                      </Popover>
                      <div>
                        <NumberCurrency value={product.price_real} />
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </Col>
        <Col span={8}>
          <div className="payment-form">
            <Form onFinish={onFinishPayment}>
              <div className="sale-user">
                <div className="sale-man">
                  <i className="ri-account-circle-fill" />
                  <span>User</span>
                </div>
                <div className="calendar-static">
                  <span>21/8/2021</span>

                  <span>14:08</span>
                </div>
              </div>
              <div className="search-customer">
                <i className="ri-search-line" />
                <Item
                  name="customer"
                  //   initialValue={
                  //     mainContent.form ? mainContent.form.customer._id : null
                  //   }
                >
                  <AutoComplete placeholder="Tìm khách hàng" />
                  {/* {listResultSearchCustomer.map((result) => (
                  <Option key={result._id} value={result._id}>
                    <h4>
                      {result.name} - <span>Hà Nội</span>
                    </h4>
                    <span>Mã: KH00{result.code}</span>
                  </Option>
                ))} */}
                  {/* {mainContent.form ? (
                  <Option
                    key={mainContent.form.customer._id}
                    value={mainContent.form.customer._id}
                  >
                    <h4>
                      {mainContent.form.customer.name} -{" "}
                      <span>{mainContent.form.customer.address}</span>
                    </h4>
                    <span>
                      Mã: KH00{mainContent.form.customer.code || "1000"}
                    </span>
                  </Option>
                ) : null} */}
                </Item>
                <div
                  className="btn-add-customer"
                  placement="bottomRight"
                  title="Thêm khách hàng"
                >
                  <i className="ri-add-line" />
                </div>
              </div>
              <div className="wrap-actions">
                <div className="checked-order">
                  <Item name="is_delivery" valuePropName="checked">
                    <Checkbox>Giao hàng</Checkbox>
                  </Item>
                </div>
              </div>

              <div>
                <div className="type-sale">
                  <div>
                    <Button
                      style={
                        tabType == "invoice"
                          ? {
                              backgroundColor: "#0090da",
                              color: "#fff",
                              borderBottomColor: "#0090da",
                            }
                          : { backgroundColor: "#fff" }
                      }
                      onClick={() => onChangeTypeTab("invoice")}
                    >
                      Hóa đơn
                    </Button>
                    <Button
                      style={
                        tabType == "order"
                          ? {
                              backgroundColor: "#0090da",
                              color: "#fff",
                              borderBottomColor: "#0090da",
                            }
                          : { backgroundColor: "#fff" }
                      }
                      onClick={() => onChangeTypeTab("order")}
                    >
                      Đặt hàng
                    </Button>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="payment-group">
                <div className="total-price">
                  <div className="left-content-wrap">
                    <span>Tổng tiền hàng</span>
                    <span>{math.total_num}</span>
                  </div>
                  <div className="right-content-wrap">
                    <span>
                      <NumberCurrency value={math.total_price} />
                    </span>
                  </div>
                </div>
                <div className="sale-off">
                  <div className="left-content-wrap">
                    <span>Giảm giá</span>
                  </div>
                  <div className="right-content-wrap">
                    <Popover
                      trigger="click"
                      content={
                        <PopOverSaleOff
                          saleOff={math.sale_off ? math.sale_off : 0}
                          totalPrice={math.total_price ? math.total_price : 0}
                        />
                      }
                      placement="left"
                    >
                      <ButtonCustom
                        addClass="btn_btn-secondary btn-icon"
                        icon={<i className="ri-price-tag-3-fill"></i>}
                      >
                        <span>
                          <NumberCurrency value={math.sale_off} />
                        </span>
                      </ButtonCustom>
                    </Popover>
                  </div>
                </div>
                <div className="total-price-real">
                  <div className="left-content-wrap">
                    <span>Khách cần trả</span>
                  </div>
                  <div className="right-content-wrap">
                    <span>
                      <NumberCurrency value={math.total_price_real} />
                    </span>
                  </div>
                </div>

                <div className="total-payment">
                  <div className="left-content-wrap">
                    <div>
                      <span>Khách thanh toán</span>
                      <span>Tiền mặt</span>
                    </div>
                    <Button
                      icon={<i className="ri-bank-card-fill" />}
                      title="Thanh toán"
                      type="primary"
                    />
                  </div>
                  <div className="right-content-wrap">
                    <InputNumber
                      value={math.total_payment}
                      onValueChange={(values) =>
                        onChangeValuePayment(values.floatValue)
                      }
                    />
                  </div>
                </div>

                <div className="total-excess">
                  <div className="left-content-wrap">
                    {/* <Item name="type_excess" initialValue="excess">
                    <GRadio
                      options={[
                        { label: "Tiền thừa trả khách", value: "excess" },
                        { label: "Tính vào công nợ", value: "debt" },
                      ]}
                    />
                  </Item> */}

                    {/* <span>Tính vào công nợ</span> */}

                    <span>Tiền thừa trả khách</span>
                  </div>
                  <div className="right-content-wrap">
                    <NumberCurrency value={math.total_excess} />
                  </div>
                </div>
                <div className="note-sale">
                  <i className="ri-pencil-fill" />
                  <Item name="note">
                    <TextArea
                      placeholder="Ghi chú.."
                      rows={1}
                      autoSize={{ maxRows: 4 }}
                    />
                  </Item>
                </div>
              </div>
              <div className="btn-submit-form-sale">
                <ButtonCustom addClass="btn_btn-primary">
                  Thanh toán
                </ButtonCustom>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

TabContent.defaultProps = {
  tabData: {
    products: [],
    math: {
      total_num: 0,
      total_price: 0,
      sale_off: 0,
      total_price_real: 0,
      total_payment: 0,
      total_excess: 0,
    },
  },
};
TabContent.propTypes = {
  tabData: PropTypes.object,
};

export default TabContent;
