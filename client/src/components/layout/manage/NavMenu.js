import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

const NavMenu = ({ type, keySelected, storeName, ...rest }) => {
  const history = useHistory();
  return (
    <Menu
      mode={type}
      triggerSubMenuAction="click"
      defaultSelectedKeys={keySelected ? keySelected : "1"}
      {...rest}
    >
      <Menu.Item
        icon={<i className="ri-eye-fill"></i>}
        key="1"
        className="fixed-overview"
        onClick={() => history.push(`/overview`)}
      >
        Tổng quan
      </Menu.Item>
      <Menu.SubMenu
        title="Hàng hóa"
        icon={<i className="ri-inbox-archive-fill"></i>}
        key="2"
      >
        <Menu.Item
          icon={<i className="ri-layout-grid-fill"></i>}
          key="product"
          onClick={() => history.push(`/products`)}
        >
          Danh mục
        </Menu.Item>
        <Menu.Item
          icon={<i className="ri-price-tag-3-fill"></i>}
          key="price"
          onClick={() => history.push(`/price-book`)}
        >
          Thiết lập giá
        </Menu.Item>
        <Menu.Item
          icon={<i className="ri-checkbox-multiple-fill"></i>}
          key="inventory"
          onClick={() => history.push(`/stock-take`)}
        >
          Kiểm kho
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        title="Giao dịch"
        icon={<i className="ri-arrow-left-right-line"></i>}
        key="3"
      >
        <Menu.Item
          icon={<i className="ri-download-2-fill"></i>}
          key="order"
          onClick={() => history.push(`/orders`)}
        >
          Đặt hàng
        </Menu.Item>
        <Menu.Item
          key="billsell"
          icon={<i className="ri-file-list-3-fill"></i>}
          onClick={() => history.push(`/invoices`)}
        >
          Hoá đơn
        </Menu.Item>
        <Menu.Item
          icon={<i className="ri-file-edit-fill"></i>}
          key="access"
          onClick={() => history.push(`/order-delivery`)}
        >
          Vận đơn
        </Menu.Item>
        <Menu.Item
          icon={<i className="ri-reply-all-fill"></i>}
          key="back"
          onClick={() => history.push(`/returns`)}
        >
          Trả hàng
        </Menu.Item>
        <Menu.Item
          icon={<i className="ri-shopping-cart-fill"></i>}
          key="buy"
          onClick={() => history.push(`/purchase-order`)}
        >
          Nhập hàng
        </Menu.Item>
        <Menu.Item
          key="backorder"
          icon={<i className="ri-hand-coin-fill"></i>}
          onClick={() => history.push(`/purchase-returns`)}
        >
          Trả hàng nhập
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        title="Đối tác"
        icon={<i className="ri-user-star-fill"></i>}
        key="4"
      >
        <Menu.Item
          icon={<i className="ri-user-3-fill"></i>}
          key="customer"
          onClick={() => history.push(`/customers`)}
        >
          Khách hàng
        </Menu.Item>
        <Menu.Item
          icon={<i className="ri-team-fill"></i>}
          key="supplier"
          onClick={() => history.push(`/suppliers`)}
        >
          Nhà cung cấp
        </Menu.Item>
        <Menu.Item
          icon={<i className="ri-user-location-fill"></i>}
          key="carrier"
          onClick={() => history.push(`/carriers`)}
        >
          Đối tác giao hàng
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item
        icon={
          <i className="ri-money-dollar-circle-fill" color="#fff" size="16px" />
        }
        onClick={() => history.push(`/cashflow`)}
        key="5"
      >
        Sổ quỹ
      </Menu.Item>
      <Menu.SubMenu
        title="Báo cáo"
        icon={<i className="ri-bar-chart-fill"></i>}
        key="6"
      >
        <Menu.Item
          icon={<i className="ri-pie-chart-2-fill"></i>}
          key="lastday"
          onClick={() => history.push(`/report/end-of-day`)}
        >
          Cuối ngày
        </Menu.Item>
        <Menu.Item
          key="sale-rp"
          icon={<i className="ri-file-text-fill"></i>}
          onClick={() => history.push(`/report/sale`)}
        >
          Bán hàng
        </Menu.Item>
        <Menu.Item
          key="order-rp"
          icon={<i className="ri-download-2-fill"></i>}
          onClick={() => history.push(`/report/order`)}
        >
          Đặt hàng
        </Menu.Item>
        <Menu.Item
          key="merchandise-rp"
          icon={<i className="ri-inbox-archive-fill"></i>}
          onClick={() => history.push(`/report/product`)}
        >
          Hàng hóa
        </Menu.Item>
        <Menu.Item
          key="customer-rp"
          icon={<i className="ri-user-3-fill"></i>}
          onClick={() => history.push(`/report/customer`)}
        >
          Khách hàng
        </Menu.Item>

        <Menu.Item
          key="supplier-rp"
          icon={<i className="ri-team-fill"></i>}
          onClick={() => history.push(`/report/supplier`)}
        >
          Nhà cung cấp
        </Menu.Item>
        <Menu.Item
          key="finance-rp"
          icon={<i className="ri-line-chart-fill"></i>}
          onClick={() => history.push(`/report/finacial`)}
        >
          Tài chính
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item
        key="9"
        className="redirect-sale"
        onClick={() => history.push(`/sale`)}
        icon={<i className="ri-shopping-basket-2-fill"></i>}
      >
        Bán hàng
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
