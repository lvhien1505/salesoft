import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { CKEditor } from "ckeditor4-react";
import Layout from "../../../../components/layout/manage/BaseLayout";
import CardEndOfDay from "../card/CardEndOfDay";
import "../../../../sass/app/views/default.scss";

const EndOfDayCustom = () => {
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
    toolbar: [
      ["NewPage", "Undo", "Redo", "Preview", "Print", "ExportPdf", "Maximize","Timestamp"],
    ],
  };
  return (
    <Fragment>
      <div className="default-custom">
        <Row gutter={[16, 8]} wrap>
          <Col lg={5} sm={8}>
            <div className="default-custom-left">
              <span className="title-default-custom">Báo cáo cuối ngày</span>
              <div className="cards-select-default">
                <CardEndOfDay />
              </div>
            </div>
          </Col>
          <Col lg={19} sm={16}>
            <div className="default-custom-right">
              <CKEditor
                config={configCKEditor}
               
                onBeforeLoad={(CKEDITOR) => {
                  CKEDITOR.plugins.add("timestamp", {
                    init: function (editor) {
                      editor.addCommand("insertTimestamp", {
                        exec: function (editor) {
                          var now = new Date();
                          editor.insertHtml(
                            "The current date and time is: <em>" +
                              now.toString() +
                              "</em>"
                          );
                        },
                      });
                      editor.ui.addButton("Timestamp", {
                        label: "Thêm ngày giờ",
                        command: "insertTimestamp",
                        toolbar: "insert",
                        icon: "https://cdn4.iconfinder.com/data/icons/24x24-free-pixel-icons/24/Clock.png",
                      });
                    },
                  });
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

const EndOfDay = () => {
  return (
    <Layout keySelected="6">
      <EndOfDayCustom />
    </Layout>
  );
};

export default EndOfDay;
