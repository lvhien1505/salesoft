import React, { useEffect, useState, useContext } from "react";
import { Tabs } from "antd";
import TabContent from "./TabContent";
import Button from "../../components/atoms/Button";
import PopProducts from "../../components/pop/main/PopProducts";
import { SaleContext } from "../../state/context/Context";

const Content = () => {
  const { TabPane } = Tabs;
  const state = useContext(SaleContext);
  const { data, dispatch } = state;
  const [popVisible, setPopVisible] = useState(false);

  const onChange = (targetKey) => {
    dispatch({
      type: "CHANGE_TAB",
      payload: {
        targetKey: targetKey,
      },
    });
  };

  const onEdit = (targetKey, action) => {
    switch (action) {
      case "add":
        dispatch({
          type: "EDIT_TAB",
          payload: {
            action: action,
          },
        });
        break;
      case "remove":
        dispatch({
          type: "EDIT_TAB",
          payload: {
            action: action,
            targetKey: targetKey,
          },
        });
        break;
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="sale-content">
      <div className="main-tabs">
        <Tabs
          type="editable-card"
          tabBarGutter={0}
          activeKey={data.activeKey}
          onEdit={onEdit}
          onChange={onChange}
        >
          {data.tabs.map((tab) => (
            <TabPane
              key={tab.key}
              tab={(tab.type === "invoice" ? "Hóa đơn" : "Đặt hàng") + " " + tab.key }
              closable={data.tabs.length == 1 ? false : true}
            >
              <TabContent tabData={tab.tabData} tabType={tab.type}/>
            </TabPane>
          ))}
        </Tabs>
        <Button
          addClass="btn_btn-primary trigger-product-screen"
          onClick={() => setPopVisible(true)}
        >
          Chọn sản phẩm
        </Button>
      </div>
      <PopProducts visible={popVisible} onCancel={() => setPopVisible(false)} />
    </div>
  );
};

export default Content;
