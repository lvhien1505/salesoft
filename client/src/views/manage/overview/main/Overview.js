import React, { Fragment } from "react";
import { Row, Col,Select } from "antd";
import { Column } from "@ant-design/charts";
import Layout from "../../../../components/layout/manage"
import '../../../../sass/app/views/overview.scss'

const OverviewCustom = () => {
  const fakevalue = [
    { _id: "1", value: "homnay", label: "Hom nay" },
    { _id: "2", value: "homqua", label: "Hom qua" },
  ];

  return (
    <Fragment>
      <div className="overview-custom">
        <Row gutter={[16, 8]} wrap>
          <Col sm={24} lg={18}>
            <div className="col-wrapper-info">
              <div className="ontop-chart">
                <div className="result-title">
                  <span>Kết quả bán hàng hôm nay</span>
                </div>
                <div className="bottom-math">
                  <div className="math-revenue">
                    <span>
                      <i className="ri-money-dollar-circle-fill"></i>
                    </span>
                    <div>
                      <span>0 Hóa đơn</span>
                      <span>0</span>
                      <span>Doanh thu</span>
                    </div>
                  </div>
                  <div className="math-bill-callback">
                    <span className="symbol-icon">
                      <i className="ri-reply-all-fill"></i>
                    </span>
                    <div>
                      <span>0 Phiếu</span>
                      <span>0</span>
                      <span>Trả hàng</span>
                    </div>
                  </div>
                  <div className="math-compare">
                    <span>
                      <i className="ri-arrow-down-circle-fill"></i>
                    </span>
                    <div>
                      <span>0</span>
                      <span>69.76</span>
                      <span>So với cùng kì tháng trước</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-infosale">
                <div className="info-revenue">
                  <div className="side-custom-select">
                    <span className="title-revenue">
                      Doanh thu thuần tháng nay
                    </span>
                    <span className="symbol-icon">
                      <i className="ri-arrow-right-circle-fill"></i>
                    </span>
                    <span className="number-revenue">0</span>
                  </div>
                  <div className="custom-select">
                    <Select options={fakevalue} defaultValue="homnay"></Select>
                  </div>
                </div>
                <div className="info-chart-sale">
                  <Column
                    data={[
                      {
                        "Doanh thu": 80000,
                        action: "Hôm nay",
                        type: "Hôm nay",
                      },
                    ]}
                    height={300}
                    xField={"action"}
                    yField={"Doanh thu"}
                    maxColumnWidth={50}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24}>
            <div className="col-wrapper-history">
              <div className="title-hitory-action">
                <span>Các hoạt động gần đây</span>
              </div>
              <div className="history-action"></div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

const Overview = () => {
  return (
    <Layout keySelected="1">
      <OverviewCustom />
    </Layout>
  );
};

export default Overview;
