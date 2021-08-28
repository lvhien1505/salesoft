import React, { useState } from "react";
import { Modal, Tabs, Form, Upload, Row, Col } from "antd";
import ImgCrop from "antd-img-crop";
import {
  InputString,
  InputNumber,
  TextArea,
} from "../../../../components/atoms/input";
import { Select } from "../../../../components/atoms/select";
import Button from "../../../../components/atoms/Button";
import "../../../../sass/app/views/modal.scss";

const FormItem = ({ label, children,addClass,spanFirst,spanLast }) => {
  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={spanFirst || 8} style={{ height: "2.75rem" }}>
          <span className="label-item">{label}</span>
        </Col>
        <Col span={spanLast || 16} style={{ height: "2.75rem" }}>
          <div
            className={addClass ? `label-item-side ${addClass}`: "label-item-side"}
            style={{ position: "relative", bottom: "0.25rem" }}
          >
            {children}
          </div>
        </Col>
      </Row>
    </div>
  );
};

const ModalUpdateProduct = ({ visible, onCancel, ...rest }) => {
  const { TabPane } = Tabs;
  const { Item } = Form;

  const [unitAccordionToggle, setUnitAccordionToggle] = useState(false);
  const [propsAccordionToggle, setPropsAccordionToggle] = useState(false);

  const optionCheckList = [
    { value: "product", label: "Hàng hóa" },
    { value: "service", label: "Dịch vụ" },
    { value: "combo", label: "Combo - Đóng gói" },
  ];
  return (
    <Modal
      title="Thêm sản phẩm"
      visible={visible}
      {...rest}
      centered
      footer={null}
      onCancel={onCancel}
      width={850}
      className="default-modal product-modal"
    >
      <Form className="update-product-form">
        <Tabs centered>
          <TabPane key="info" tab="Thông tin">
            <div className="update-info">
              <Row gutter={[24, 8]}>
                <Col span={12}>
                  <div className="update-left-info">
                    <FormItem label="Mã hàng" addClass="product-code">
                      <Item name="code" initialValue="Mã hàng tự động">
                        <InputString />
                      </Item>
                    </FormItem>
                    <FormItem label="Tên hàng">
                      <Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập tên sản phẩm",
                          },
                        ]}
                      >
                        <InputString />
                      </Item>
                    </FormItem>
                    <FormItem label="Loại hàng">
                      <Item
                        name="type"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng lựa nhóm hàng",
                          },
                        ]}
                        initialValue={"product"}
                      >
                        <Select options={optionCheckList}></Select>
                      </Item>
                    </FormItem>
                    <FormItem label="Nhóm hàng" addClass="select-category-item">
                      <Item
                        name="category"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng lựa nhóm hàng",
                          },
                        ]}
                      >
                        <Select placeholder="--Lựa chọn--"></Select>
                      </Item>
                      <div className="add-icon-symbol">
                        <i
                          className="ri-add-fill"
                          title="Thêm nhóm hàng"
                        />
                      </div>
                    </FormItem>
                    <FormItem label="Vị trí" addClass="select-position-item">
                      <Item name="position">
                        <Select showSearch mode="multiple"></Select>
                      </Item>
                      <div className="update-icon-symbol">
                        <i className="ri-pencil-line" title="Cập nhật" />
                      </div>
                      <div className="add-icon-symbol">
                        <i className="ri-add-fill" title="Thêm vị trí" />
                      </div>
                    </FormItem>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="update-right-info">
                    <FormItem label="Mã vạch">
                      <Item name="bar_code">
                        <InputString />
                      </Item>
                    </FormItem>
                    <FormItem label="Giá vốn">
                      <Item name="cost_price">
                        <InputNumber />
                      </Item>
                    </FormItem>
                    <FormItem label="Giá bán" addClass="price-item-input">
                      <Item name="price">
                        <InputNumber />
                      </Item>
                      <div className="add-icon-symbol">
                        <i className="ri-price-tag-3-fill" />
                      </div>
                    </FormItem>
                    <FormItem label="Tồn kho">
                      <Item name="inventory">
                        <InputNumber />
                      </Item>
                    </FormItem>
                    <FormItem label="Trọng lượng">
                      <Item name="weight">
                        <InputNumber />
                      </Item>
                    </FormItem>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="img-upload">
              <Item name="upload">
                <ImgCrop rotate>
                  <Upload
                    listType="picture-card"
                    maxCount={1}
                    accept={"image/*"}
                    name="upload"
                  >
                    {"+ Ảnh"}
                  </Upload>
                </ImgCrop>
              </Item>
            </div>
            <div className="update-utils">
              <div className="property">
                <div
                  className="property-header"
                  onClick={() => setPropsAccordionToggle(!propsAccordionToggle)}
                  style={
                    propsAccordionToggle
                      ? {
                          borderBottomLeftRadius: "0",
                          borderBottomRightRadius: "0",
                        }
                      : null
                  }
                >
                  <span>Thuộc tính</span>
                  <div>
                    {propsAccordionToggle ? (
                      <i className="ri-arrow-up-s-fill"></i>
                    ) : (
                      <i className="ri-arrow-down-s-fill"></i>
                    )}
                  </div>
                </div>

                {propsAccordionToggle ? (
                  <div className="property-content">
                    <Button
                      icon={<i className="ri-add-fill" />}
                      addClass="btn-icon btn_btn-secondary"
                    >
                      Thêm thuộc tính
                    </Button>
                  </div>
                ) : null}
              </div>
              <div className="unit">
                <div
                  className="unit-header"
                  onClick={() => setUnitAccordionToggle(!unitAccordionToggle)}
                  style={
                    unitAccordionToggle
                      ? {
                          borderBottomLeftRadius: "0",
                          borderBottomRightRadius: "0",
                        }
                      : null
                  }
                >
                  <span>Đơn vị tính</span>
                  <div>
                    {unitAccordionToggle ? (
                      <i className="ri-arrow-up-s-fill"></i>
                    ) : (
                      <i className="ri-arrow-down-s-fill"></i>
                    )}
                  </div>
                </div>

                {unitAccordionToggle ? (
                  <div className="unit-content">
                    <Button
                      icon={<i className="ri-add-fill" />}
                      addClass="btn-icon btn_btn-secondary"
                    >
                      Thêm đơn vị
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </TabPane>
          <TabPane key="description" tab="Mô tả chi tiết">
            <div className="inventory-quota">
              <h4>Định mức tồn</h4>
              <div className="control-quota">
                <Row gutter={[24,8]}>
                  <Col span={12}>
                    <FormItem label="Ít nhất" spanFirst={6} spanLast={18}>
                      <Item name="less_inventory_quota">
                        <InputNumber />
                      </Item>
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem label="Nhiều nhất"  spanFirst={6} spanLast={18}>
                      <Item name="more_inventory_quota">
                        <InputNumber />
                      </Item>
                    </FormItem>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="product-description">
              <h4>Mô tả</h4>
              <Item name="description">
                <TextArea autoSize={{ minRows: 4, maxRows: 4 }} />
              </Item>
            </div>
            <div className="product-note">
              <h4>Mẫu ghi chú (hóa đơn, đặt hàng)</h4>
              <Item name="note">
                <TextArea autoSize={{ minRows: 4, maxRows: 4 }} />
              </Item>
            </div>
          </TabPane>
        </Tabs>
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

export default ModalUpdateProduct;
