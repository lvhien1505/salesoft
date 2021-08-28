import React,{Fragment,useState} from "react";
import { Table, Row, Col, Input, Menu, Popover } from "antd";
import Layout from "../../../../components/layout/manage";
import Button from "../../../../components/atoms/Button";
import SelectRecord from "../../../../components/record/SelectRecord";
import ButtonOptions from "../../../../components/options/ButtonOptions";
import CardCarrier from "../card/CardCarrier";
import ModalUpdateCarrier from '../modal/ModalUpdateCarrier'
import "../../../../sass/app/views/default.scss";

const Buttons = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <Fragment>
      <div className="btn-action">
        <Button
          icon={<i className="ri-add-fill"></i>}
          addClass="btn-icon btn_btn-primary"
          onClick={() => setVisibleModal(true)}
        >
          Đối tác
        </Button>
      </div>
      <div className="btn-action">
        <Button
          icon={<i className="ri-file-upload-fill"></i>}
          addClass="btn-icon btn_btn-primary"
        >
          Import
        </Button>
      </div>
      <div className="btn-action">
        <Button
          icon={<i className="ri-file-transfer-fill"></i>}
          addClass="btn-icon btn_btn-primary"
        >
          Xuất file
        </Button>
      </div>
      <ModalUpdateCarrier
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
      />
    </Fragment>
  );
};

const ButtonMenu = () => {
  return (
    <Fragment>
      <Menu>
        <Menu.Item key="1" icon={<i className="ri-add-fill"></i>}>
          Đối tác
        </Menu.Item>
        <Menu.Item key="2" icon={<i className="ri-file-upload-fill"></i>}>
          Import
        </Menu.Item>
        <Menu.Item key="3" icon={<i className="ri-file-transfer-fill"></i>}>
          Xuất file
        </Menu.Item>
      </Menu>
    </Fragment>
  );
};

const CarrierCustom = () => {
  return (
    <Fragment>
      <div className="default-custom">
        <Row gutter={[16, 8]} wrap>
          <Col lg={5} sm={8}>
            <div className="default-custom-left">
              <span className="title-default-custom">Đối tác giao hàng</span>
              <div className="cards-select-default">
                <CardCarrier />
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
                        placeholder="Theo mã hoặc tên"
                        prefix={<i className="ri-search-line" />}
                      />
                    </div>
                  </Col>
                  <Col span={8} offset={6}>
                    {" "}
                    <div className="btn-action-default">
                      <ButtonOptions buttons={Buttons} menu={ButtonMenu} />
                      <div className="btn-action">
                        <Popover
                          placement="bottomRight"
                          trigger="click"
                          //   content={<ContentOptionProduct />}
                        >
                          <Button
                            icon={<i className="ri-grid-fill"></i>}
                            addClass="btn-icon btn_btn-primary"
                          >
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

const Carrier = () => {
  return (
    <Layout keySelected="4">
      <CarrierCustom />
    </Layout>
  );
};

export default Carrier;
