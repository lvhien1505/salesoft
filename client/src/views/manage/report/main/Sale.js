import React, { Fragment } from "react";
import { Row, Col } from "antd";
import Layout from "../../../../components/layout/manage/BaseLayout";
import CardSale from "../card/CardSale";
import "../../../../sass/app/views/default.scss";

const SaleCustom = () => {
  return (
    <Fragment>
      <div className="default-custom">
        <Row gutter={[16, 8]} wrap>
          <Col lg={5} sm={8}>
            <div className="default-custom-left">
              <span className="title-default-custom">Báo cáo bán hàng</span>
              <div className="cards-select-default">
                <CardSale />
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

const Sale = () => {
  return (
    <Layout keySelected="6">
      <SaleCustom />
    </Layout>
  );
};

export default Sale;
