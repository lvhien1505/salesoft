import React from "react";
import { Modal, Form, Row, Col } from "antd";
import { InputString } from "../../../../components/atoms/input";
import Button from "../../../../components/atoms/Button";
import "../../../../sass/app/views/modal.scss";

const ModalUpdatePosition = ({ visible, onCancel, ...rest }) => {
  const { Item } = Form;
  return (
    <Modal
      title="Thêm nhóm hàng"
      visible={visible}
      {...rest}
      centered
      footer={null}
      onCancel={onCancel}
      width={450}
      className="default-modal position-modal"
    >
      <Form>
        <div>
          <Row gutter={[8,8]}>
            <Col span={6}>
              <span style={{position:"relative",top:"0.25rem"}}>Tên vị trí</span>
            </Col>
            <Col span={18}>
              <Item
                name="name"
                rules={[{ required: true, message: "Bạn chưa nhập tên vị trí" }]}
              >
                <InputString />
              </Item>
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

export default ModalUpdatePosition;
