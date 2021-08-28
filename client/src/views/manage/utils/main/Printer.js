import React, { Fragment, useState } from "react";
import { Tabs, Row, Col } from "antd";
import Layout from "../../../../components/layout/manage";
import Button from "../../../../components/atoms/Button";
import ModalUpdatePrintTemplate from "../modal/ModalUpdatePrintTemplate";
import {invoiceTemplate} from '../../../../cache/printTemplate'
import "../../../../sass/app/views/utils.scss";

const ContentTab = ({ children }) => {
  const [visibleModal,setVisibleModal] = useState(false)
  return (
    <Row>
      <Col span={24} style={{ height: "39px" }}>
        <h3 style={{ textAlign: "center", fontSize: "1.25rem" }}>Mẫu in</h3>
      </Col>
      <Col span={24}>{children}</Col>
      <Button
        icon={<i className="ri-add-fill" />}
        addClass="btn-icon btn_btn-primary"
        onClick={()=>setVisibleModal(true)}
      >
        Thêm mẫu in
      </Button>
      <ModalUpdatePrintTemplate visible={visibleModal} onCancel={()=>setVisibleModal(false)}/>
    </Row>
  );
};

const PrinterCustom = () => {
  const { TabPane } = Tabs;
  let _invoiceTemplate = invoiceTemplate();

  return (
    <div className="wrapper-printer">
      <Row>
        <Col span={24}>
          <div className="print-template">
            <Tabs centered type="card" tabPosition="left" size="large">
              <TabPane key="invoice" tab="Hóa đơn">
                <ContentTab>
                  <div dangerouslySetInnerHTML={{ __html: _invoiceTemplate }}></div>
                </ContentTab>
              </TabPane>
              <TabPane key="order" tab="Đặt hàng">
                <ContentTab>a</ContentTab>
              </TabPane>
              <TabPane key="ship" tab="Giao hàng">
                <ContentTab>a</ContentTab>
              </TabPane>
              <TabPane key="returns" tab="Trả hàng">
                <ContentTab>a</ContentTab>
              </TabPane>
              <TabPane key="returns-change" tab="Đổi trả hàng">
                <ContentTab>a</ContentTab>
              </TabPane>
              <TabPane key="purchase-order" tab="Nhập hàng">
                <ContentTab>a</ContentTab>
              </TabPane>
              <TabPane key="purchase-returns" tab="Trả hàng nhập">
                <ContentTab>a</ContentTab>
              </TabPane>
              <TabPane key="collect" tab="Phiếu thu">
                <ContentTab>a</ContentTab>
              </TabPane>
              <TabPane key="pay" tab="Phiếu chi">
                <ContentTab>a</ContentTab>
              </TabPane>
            </Tabs>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Printer = () => {
  return (
    <Layout>
      <PrinterCustom />
    </Layout>
  );
};

export default Printer;
