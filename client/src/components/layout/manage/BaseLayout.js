import React, { useState, useContext, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { TouchDevice, Default } from "../../device";
import NavMenu from "./NavMenu";
import { Button, Menu } from "antd";
import "../../../sass/app/components/layout.scss";

const { Item } = Menu;
const BaseLayout = ({ children, keySelected }) => {
  let history = useHistory();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user_t");

    return (window.location.href = "/");
  };

  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="dashboard-layout">
        <div className="dashboard-layout-header">
          <Default>
            <div className="nav-menu">
              <NavMenu keySelected={keySelected} type={"horizontal"} />
            </div>
          </Default>

          <div className="header-dashboard-header">
            <div className="logo-header">
              <TouchDevice>
                <div className="nav-menu-mb">
                  <Button
                    icon={<i className="ri-list-unordered"></i>}
                    type="primary"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  ></Button>
                  {toggleMenu ? (
                    <NavMenu keySelected={keySelected} type={"vertical"} />
                  ) : null}
                </div>
              </TouchDevice>
              <div className="main-logo">
                <span>Sale</span>
                <span>Soft</span>
              </div>
            </div>
            <div className="side-logo">
              <div className="config-shop">
                <div className="toggle-menu">
                  <span>Thiết lập</span>
                  <i className="ri-settings-3-fill"></i>
                </div>
                <div className="menu-config">
                  <Menu>
                    <Item
                      key="1"
                      onClick={() => history.push(`/print-template`)}
                    >
                      Quản lý mẫu in
                    </Item>
                    <Item key="2" onClick={() => history.push(`/users`)}>
                      Quản lý người dùng
                    </Item>
                    <Item key="3">Lịch sử thao tác</Item>
                  </Menu>
                </div>
              </div>
              <div className="config-account">
                <div className="toggle-menu">
                  <span>{"User"}</span>
                  <i className="ri-account-circle-fill"></i>
                </div>
                <div className="menu-config">
                  <Menu>
                    <Item key="1">Tài khoản</Item>
                    <Item key="2" onClick={handleLogout}>
                      Đăng xuất
                    </Item>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content-dashboard"
          onClick={() => setToggleMenu(false)}
        >
          <div className="main-wrapper">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default BaseLayout;
