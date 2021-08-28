import React, { Fragment } from "react";
import { Row, Col } from "antd";
import Layout from "../../../../components/layout/manage/BaseLayout";
import CardCustomer from "../card/CardCustomer";
import "../../../../sass/app/views/default.scss";

const CustomerCustom = () => {
  return (
    <Fragment>
      <div className="default-custom">
        <Row gutter={[16, 8]} wrap>
          <Col lg={5} sm={8}>
            <div className="default-custom-left">
              <span className="title-default-custom">Báo cáo khách hàng</span>
              <div className="cards-select-default">
                <CardCustomer />
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

const Customer = () => {
  return (
    <Layout keySelected="6">
      <CustomerCustom />
    </Layout>
  );
};

export default Customer;
