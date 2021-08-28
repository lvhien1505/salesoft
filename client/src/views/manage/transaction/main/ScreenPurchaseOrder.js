import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Table, Row,Input, Col,Button, Form } from "antd";
import Layout from "../../../../components/layout/manage";
import ButtonCustom from "../../../../components/atoms/Button";
import {TextArea} from '../../../../components/atoms/input';
import "../../../../sass/app/views/merchandise.scss";

const ScreenCustomer = () => {
  const { Item } = Form;
  let history = useHistory();
  return (
    <Fragment>
      <div className="stock-take-screen">
        <Row gutter={[16, 8]}>
          <Col sm={15} lg={17}>
            <div className="left-screen">
              <div className="ontop-table">
                <Row>
                  <Col span={6}>
                    <div className="left-col">
                      <Button
                        className="goback-redirect"
                        onClick={() => history.goBack()}
                        icon={<i className="ri-arrow-left-line" />}
                      ></Button>
                      <h3>Nhập hàng</h3>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="center-col">
                      <Input
                        className="inp-merchandise"
                        placeholder="Tìm hàng hóa theo mã hoặc tên"
                        prefix={<i className="ri-search-line" />}
                      />
                      <Button
                        title="Chọn theo nhóm hàng"
                        icon={<i className="ri-list-unordered" />}
                        //   onClick={handleShowSidePopCategory}
                      ></Button>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="right-col">
                      <Button
                        title="Import"
                        icon={<i className="ri-add-fill" />}
                      />
                      <Button
                        title="In"
                        icon={<i className="ri-printer-fill" />}
                      />
                      <Button
                        title="Tùy chọn hiển thị"
                        icon={<i className="ri-eye-fill" />}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="screen-table">
                <div className="main-table">
                  <Table
                  // columns={columnStartInventoryCount}
                  // dataSource={
                  //   typeShow == "all"
                  //     ? listData.listAll
                  //     : typeShow == "alike"
                  //     ? listData.listAlike
                  //     : typeShow == "diff"
                  //     ? listData.listDiff
                  //     : []
                  // }
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col sm={9} lg={7}>
            <div className="right-screen">
              <Form>
                <div className="stock-take-user">
                  <div className="stock-take-man">
                    <i className="ri-account-circle-fill" />
                    <span>User</span>
                  </div>
                  <div className="calendar-static">
                    <span>28/6/2021</span>

                    <span>4:30</span>
                  </div>
                </div>
                <div className="stock-take-code">
                  <span>Mã phiếu nhập</span>
                  <span>Mã phiếu tự động</span>
                </div>
                <div className="stock-take-status">
                  <span>Trạng thái</span>
                  <span>Phiếu tạm</span>
                </div>
                <div className="total-num-real">
                  <span>Tổng tiền hàng</span>
                  <span>0</span>
                </div>
                
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
               
              
                <div className="note">
                  <i className="ri-pencil-fill" />
                  <Item name="note">
                    <TextArea
                      placeholder="Ghi chú.."
                      rows={1}
                      autoSize={{ maxRows: 4 }}
                    />
                  </Item>
                </div>
                <div className="stock-take-history">
                  <h4>Kiểm gần đây</h4>
                  <div className="history-content">
                    <div className="history-check">
                      {/* {listData.historyAction.length > 0
                    ? listData.historyAction.map((action, key) => (
                        <div
                          title={
                            action.type == "add"
                              ? `Thêm ${action.name} vào danh sách kiểm`
                              : action.type == "remove"
                              ? `Xóa ${action.name} khỏi danh sách kiểm`
                              : action.type == "change"
                              ? `Cập nhật số lượng của ${action.name}`
                              : ""
                          }
                          className="action-history"
                          key={key}
                        >
                          <Icon
                            className={
                              action.type == "add"
                                ? "ri-file-copy-line"
                                : action.type == "remove"
                                ? "ri-delete-bin-5-line"
                                : action.type == "change"
                                ? "ri-pencil-line"
                                : ""
                            }
                            size="16px"
                            color="#999"
                          />
                          <span>
                            {action.name} ({action.num})
                          </span>
                        </div>
                      ))
                    : null} */}
                    </div>
                  </div>
                </div>
                <div className="btn-submit">
                  <Row gutter={[8,8]}>
                    <Col span={12}>
                      <ButtonCustom
                        // onClick={() => onsubmitForm("pending")}
                        icon={<i className="ri-sim-card-fill" />}
                        addClass="btn-save btn-icon btn_btn-secondary"
                      >
                        Lưu tạm
                      </ButtonCustom>
                    </Col>
                    <Col span={12}>
                      <ButtonCustom
                        // onClick={() => onsubmitForm("done")}
                        icon={<i className="ri-check-fill" />}
                        addClass="btn-done btn-icon btn_btn-primary"
                      >
                        Hoàn thành
                      </ButtonCustom>
                    </Col>
                  </Row>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

const ScreenPurchaseOrder = () => {
  return (
    <Layout keySelected="2">
      <ScreenCustomer />
    </Layout>
  );
};

export default ScreenPurchaseOrder;
