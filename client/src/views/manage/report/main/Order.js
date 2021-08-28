import React, { Fragment } from "react";
import { Row, Col } from "antd";
import Layout from "../../../../components/layout/manage/BaseLayout";
import CardOrder from "../card/CardOrder";
import "../../../../sass/app/views/default.scss";

const OrderCustom = () => {
  return (
    <Fragment>
      <div className="default-custom">
        <Row gutter={[16, 8]} wrap>
          <Col lg={5} sm={8}>
            <div className="default-custom-left">
              <span className="title-default-custom">Báo cáo đặt hàng</span>
              <div className="cards-select-default">
                <CardOrder />
              </div>
            </div>
          </Col>
          <Col lg={19} sm={16}>
            <div className="default-custom-right"></div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

const Order = () => {
  return (
    <Layout keySelected="6">
      <OrderCustom />
    </Layout>
  );
};

export default Order;
