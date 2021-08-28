import React from "react";
import { Modal, Form, Row, Col, Upload, Radio } from "antd";
import ImgCrop from "antd-img-crop";
import {
  InputString,
  InputNumber,
  TextArea,
} from "../../../../components/atoms/input";
import { Select } from "../../../../components/atoms/select";
import Button from "../../../../components/atoms/Button";
import "../../../../sass/app/views/modal.scss";

const FormItem = ({ label, children, addClass }) => {
  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={8} style={{ height: "2.75rem" }}>
          <span className="label-item">{label}</span>
        </Col>
        <Col span={16} style={{ height: "2.75rem" }}>
          <div
            className={
              addClass ? `label-item-side ${addClass}` : "label-item-side"
            }
            style={{ position: "relative", bottom: "0.25rem" }}
          >
            {children}
          </div>
        </Col>
      </Row>
    </div>
  );
};

const ModalUpdateCustomer = ({ visible, onCancel, ...rest }) => {
  const { Item } = Form;
  return (
    <Modal
      title="Thêm khách hàng"
      visible={visible}
      {...rest}
      centered
      footer={null}
      onCancel={onCancel}
      width={850}
      className="default-modal customer-modal"
    >
      <Form className="update-partner-form">
        <div className="update-info">
          <Row gutter={[24, 8]}>
            <Col span={12}>
              <div>
                <FormItem label="Mã khách hàng" addClass="partner-code">
                  <Item name="code" initialValue="Mã mặc định">
                    <InputString />
                  </Item>
                </FormItem>
                <FormItem label="Tên khách hàng">
                  <Item name="name">
                    <InputString />
                  </Item>
                </FormItem>
                <FormItem label="Điện thoại">
                  <Item name="phone">
                    <InputString />
                  </Item>
                </FormItem>
                <FormItem label="Ngày sinh">
                  <Item name="phone">
                    <InputString />
                  </Item>
                </FormItem>
                <FormItem label="Giới tính">
                  <Item name="sex">
                    <Select bordered={false} />
                  </Item>
                </FormItem>

                <FormItem label="Địa chỉ">
                  <Item name="address">
                    <InputString />
                  </Item>
                </FormItem>
                <FormItem label="Khu vực">
                  <Item name="area">
                    <Select
                      bordered={false}
                      suffixIcon={<i className="ri-search-line" />}
                      showSearch
                    />
                  </Item>
                </FormItem>

                <div className="customer-img-upload">
                  <ImgCrop rotate>
                    <Upload listType="picture-card">+ Ảnh</Upload>
                  </ImgCrop>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="right-control-form">
                <FormItem label="Phường xã">
                  <Item name="commune">
                    <Select
                      bordered={false}
                      suffixIcon={<i className="ri-search-line" />}
                      showSearch
                    />
                  </Item>
                </FormItem>
                <FormItem label="Loại khách">
                  <Item name="customer_type">
                    <Select bordered={false} />
                  </Item>
                </FormItem>
                <FormItem label="Mã số thuế">
                  <Item name="code_tax">
                    <InputString />
                  </Item>
                </FormItem>
                <FormItem label="Email">
                  <Item name="email">
                    <InputString />
                  </Item>
                </FormItem>
                <FormItem label="Facebook">
                  <Item name="facebook">
                    <InputString />
                  </Item>
                </FormItem>
                <FormItem label="Nhóm khách hàng">
                  <Item name="group">
                    <Select
                      bordered={false}
                      suffixIcon={<i className="ri-search-line" />}
                      showSearch
                    />
                  </Item>
                </FormItem>
                <FormItem label="Ghi chú">
                  <Item name="note">
                    <TextArea autoSize={{ minRows: 1, maxRows: 3 }} />
                  </Item>
                </FormItem>
              </div>
            </Col>
          </Row>
        </div>
        <div className="btn-action">
          <Button
            icon={<i className="ri-check-fill" />}
            addClass="btn-icon btn_btn-primary"
          >
            Cập nhật
          </Button>
          <Button
            icon={<i className="ri-close-fill" />}
            addClass="btn-icon btn_btn-last"
          >
            Hủy bỏ
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalUpdateCustomer;
