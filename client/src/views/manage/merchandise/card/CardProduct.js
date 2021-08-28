import React, { Fragment,useState } from "react";
import { Checkbox, Radio } from "antd";
import Card from "../../../../components/card/Card";
import {InputString} from '../../../../components/atoms/input';
import ModalUpdateCategory from "../modal/ModalUpdateCategory";
import ModalUpdatePosition from "../modal/ModalUpdatePosition";
import '../../../../sass/app/views/card.scss';

const CardProduct = () => {
  const { Group } = Checkbox;
  const [visibleModal,setVisibleModal] = useState(false);

  const options = [
    { label: "Hàng hóa", value: "hanghoa" },
    { label: "Dịch vụ", value: "dichvu" },
    { label: "Combo - Đóng gói", value: "combo" },
  ];

  const optionsRadio = [
    { label: "Tất cả", value: "tatca" },
    { label: "Dưới định mức tồn", value: "duoiton" },
    { label: "Vượt định mức tồn", value: "trenton" },
    { label: "Còn hàng trong kho", value: "conhang" },
    { label: "Hết hàng trong kho", value: "hethang" },
  ];
  return (
    <Fragment>
      <Card title="Loại hàng">
        <Group options={options} defaultValue={["hanghoa"]}></Group>
      </Card>
      <Card title="Nhóm hàng" icon={<i className="ri-add-circle-line" onClick={()=>setVisibleModal(true)}/>} addClass="card-category-product">
        <InputString
          placeholder={"Tìm kiếm nhóm hàng"}
          prefix={<i className="ri-search-line" />}
        />
        <div className="list-category_mechandise">
          <div className="item-category_selected item-category_merchandise">
            <span>Tất cả</span>
          </div>
        </div>
      </Card>
      <Card title="Tồn kho">
        <Radio.Group options={optionsRadio} defaultValue="tatca"></Radio.Group>
      </Card>
      <Card title="Ngày dự kiến hết hàng"></Card>
      <Card title="Nhà cung cấp"></Card>
      <Card title="Lựa chọn hiển thị"></Card>
      <ModalUpdateCategory visible={visibleModal} onCancel={()=>setVisibleModal(false)}/>
    </Fragment>
  );
};

export default CardProduct;
