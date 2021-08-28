import React from "react";
import { Col, Modal, Row } from "antd";
import { CKEditor } from "ckeditor4-react";
import { invoiceTemplate } from "../../../../cache/printTemplate";

const ModalUpdatePrintTemplate = ({ visible, onCancel, ...rest }) => {
  let initData = invoiceTemplate();
  const configCKEditor = {
    extraPlugins: [
      "font",
      "autogrow",
      "justify",
      "colorbutton",
      "preview",
      "print",
      "exportpdf",
      "timestamp"
    ],
    uiColor: "#0090da",
    removeButtons: "About",
  };

  const onBeforeLoad = (CKEDITOR) => {
    CKEDITOR.plugins.add("timestamp", {
      init: function (editor) {
        editor.addCommand("insertTimestamp", {
          exec: function (editor) {
            editor.insertHtml(
              `<h1><strong><span style="color:#2980b9">Sale</span><span style="color:#2ecc71">Soft</span></strong></h1>`
            );
          },
        });
        editor.ui.addButton("Timestamp", {
          label: "Insert Timestamp",
          command: "insertTimestamp",
          toolbar: "insert",
          icon: "https://cdn4.iconfinder.com/data/icons/24x24-free-pixel-icons/24/Clock.png",
        });
        
      },
    });
  };

  return (
    <Modal
      centered
      width="100%"
      style={{ height: "100%" }}
      visible={visible}
      onCancel={onCancel}
      title="Thêm mẫu in"
      footer={null}
    >
      <Row>
        <Col span={24}>
          <CKEditor
            config={configCKEditor}
            initData={initData}
            onBeforeLoad={onBeforeLoad}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalUpdatePrintTemplate;
