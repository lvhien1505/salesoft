import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Table, Row,Input, Col,Button, Form } from "antd";
import Layout from "../../../../components/layout/manage";
import ButtonCustom from "../../../../components/atoms/Button";
import {TextArea} from '../../../../components/atoms/input';
import "../../../../sass/app/views/merchandise.scss";

const ScreenConsumer = () => {
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
                      <h3>Kiểm kho</h3>
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
                <div className="tabs-table">
                  <Button
                  // style={
                  //   typeShow == "all"
                  //     ? { backgroundColor: "#0090da", color: "#fff" }
                  //     : { backgroundColor: "#eee" }
                  // }
                  // onClick={() => handleShowTable("all")}
                  >
                    Tất cả (0)
                  </Button>
                  <Button
                  // style={
                  //   typeShow == "alike"
                  //     ? { backgroundColor: "#0090da", color: "#fff" }
                  //     : { backgroundColor: "#eee" }
                  // }
                  // onClick={() => handleShowTable("alike")}
                  >
                    Khớp (0)
                  </Button>
                  <Button
                  // style={
                  //   typeShow == "diff"
                  //     ? { backgroundColor: "#0090da", color: "#fff" }
                  //     : { backgroundColor: "#eee" }
                  // }
                  // onClick={() => handleShowTable("diff")}
                  >
                    Lệch (0)
                  </Button>
                </div>
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
                  <span>Mã kiểm kho</span>
                  <span>Mã phiếu tự động</span>
                </div>
                <div className="stock-take-status">
                  <span>Trạng thái</span>
                  <span>Phiếu tạm</span>
                </div>
                <div className="total-num-real">
                  <span>Tổng SL thực tế</span>
                  <span>0</span>
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

const ScreenStockTake = () => {
  return (
    <Layout keySelected="2">
      <ScreenConsumer />
    </Layout>
  );
};

export default ScreenStockTake;
