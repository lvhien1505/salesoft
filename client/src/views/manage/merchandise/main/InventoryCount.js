import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Table, Row, Col, Menu, Input, Popover } from "antd";
import Layout from "../../../../components/layout/manage";
import Button from "../../../../components/atoms/Button";
import ButtonOptions from "../../../../components/options/ButtonOptions";
import SelectRecord from "../../../../components/record/SelectRecord";
import CardInventoryCount from "../card/CardInventoryCount";
import "../../../../sass/app/views/default.scss";

const Buttons = () => {
  let history = useHistory();
  return (
    <Fragment>
      <div className="btn-action">
        <Button
          icon={<i className="ri-add-fill"></i>}
          onClick={() => history.push("/stock-take/screen")}
          addClass="btn-icon btn_btn-primary"
        >
          Kiểm kho
        </Button>
      </div>
      <div className="btn-action">
        <Button icon={<i className="ri-file-transfer-fill"></i>} addClass="btn-icon btn_btn-primary">
          Xuất file <i className="ri-arrow-down-s-fill"></i>
        </Button>
      </div>
    </Fragment>
  );
};

const ButtonMenu = () => {
  let history = useHistory();
  return (
    <Fragment>
      <Menu>
        <Menu.Item key="1" icon={<i className="ri-add-fill"></i>}  onClick={() => history.push("/stock-take/screen")}>
          Kiểm kho
        </Menu.Item>
        <Menu.Item key="2" icon={<i className="ri-file-transfer-fill"></i>}>
          Xuất file
        </Menu.Item>
      </Menu>
    </Fragment>
  );
};

const InventoryCountCustom = () => {
  return (
    <Fragment>
      <div className="default-custom">
        <Row gutter={[16, 8]} wrap>
          <Col lg={5} sm={8}>
            <div className="default-custom-left">
              <span className="title-default-custom">Phiếu kiểm kho</span>
              <div className="cards-select-default">
                <CardInventoryCount />
              </div>
              <div className="default-select-record">
                <SelectRecord />
              </div>
            </div>
          </Col>
          <Col lg={19} sm={16}>
            <div className="default-custom-right">
              <div className="header-on-table">
                <Row>
                  <Col span={10}>
                    {" "}
                    <div className="search-section">
                      <Input
                        className="inp-search"
                        placeholder="Theo mã phiếu kiểm"
                        prefix={<i className="ri-search-line" />}
                      />
                    </div>
                  </Col>
                  <Col span={8} offset={6}>
                    {" "}
                    <div className="btn-action-default">
                      <ButtonOptions menu={ButtonMenu} buttons={Buttons}/>
                      <div className="btn-action">
                        <Popover
                          placement="bottomRight"
                          trigger="click"
                          //   content={<ContentOptionProduct />}
                        >
                          <Button icon={<i className="ri-grid-fill"></i>} addClass="btn-icon btn_btn-primary">
                            <i className="ri-arrow-down-s-fill"></i>
                          </Button>
                        </Popover>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="table-default">
                <Table
                // expandable={{
                //   expandedRowRender: (record) => expandedRowRender(record),
                //   expandRowByClick: true,
                //   expandIconColumnIndex: -1,
                // }}
                // onRow={handleEventRow}
                // rowSelection={configRow}
                // columns={options.columns}
                // dataSource={initData.products}
                // pagination={configPagination}
                // scroll={configScroll}
                // rowClassName={(record, index) => "row-config-" + index}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

const InventoryCount = () => {
  return (
    <Layout keySelected="2">
      <InventoryCountCustom />
    </Layout>
  );
};

export default InventoryCount;
