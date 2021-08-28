import React, { useState } from "react";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { Menu, AutoComplete } from "antd";

const Header = () => {
  let history = useHistory();
  const { Item } = Menu;
  const [visibleMenu, setVisibleMenu] = useState(false);
  return (
    <div className="sale-header">
      <div className="product-searchbox">
        <i className="ri-search-line" />
        <AutoComplete className="search-inp" placeholder="Tìm mặt hàng" />
      </div>

      <ul className="list-sale-actor">
        <li className="item-sale-actor" title="Trả hàng" key="1.1">
          <i className="ri-reply-all-fill" />
        </li>
        <li className="item-sale-actor" title="Thiết lập in" key="1.2">
          <i className="ri-printer-fill" />
        </li>
        <li className="item-sale-actor info-user" key="1.3">
          <span> {"User"}</span>
        </li>
        <li
          className="item-sale-actor sale-menu"
          onClick={() => setVisibleMenu(!visibleMenu)}
          key="1.4"
        >
          <i className="ri-menu-fill" />
          {visibleMenu ? (
            <Menu
              className="menu-sale"
              triggerSubMenuAction="click"
              mode="inline"
            >
              <Item
                key="1"
                icon={<i className="ri-bar-chart-horizontal-fill" />}
              >
                Xem báo cáo cuối ngày
              </Item>
              <Item key="2" icon={<i className="ri-reply-all-fill" />}>
                Chọn hóa đơn trả hàng
              </Item>
              <Item key="3" icon={<i className="ri-file-text-fill" />}>
                Lập phiếu thu
              </Item>
              <Item key="4" icon={<i className="ri-file-upload-fill" />}>
                Import
              </Item>
              <Item key="5" icon={<i className="ri-eye-off-fill" />}>
                Tùy chọn hiển thị
              </Item>
              <Item
                key="6"
                icon={<i className="ri-pages-fill" />}
                onClick={() => history.push(`/overview`)}
              >
                Quản lý
              </Item>
              <Item
                key="7"
                icon={<i className="ri-logout-circle-r-line" />}
                //   onClick={handleLogout}
              >
                Đăng xuất
              </Item>
            </Menu>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Header;
