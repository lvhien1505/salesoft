import React, { Fragment, useState } from "react";
import Button from '../atoms/Button'
import { Default, TouchDevice } from "../device";

const ButtonOptions = ({ menu: Menu, buttons: Buttons }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Fragment>
      <Default>
        <Buttons />
      </Default>
      <TouchDevice>
        <div className="btn-action-menu">
          <Button onClick={()=>setToggleMenu(!toggleMenu)} addClass="btn-icon btn_btn-primary">
            Tùy chọn
            <i className="ri-arrow-down-s-fill" />
          </Button>
          {toggleMenu ? <Menu /> : null}
        </div>
      </TouchDevice>
    </Fragment>
  );
};

export default ButtonOptions;
