import React, { Fragment, useState } from "react";
import { Button } from "antd";
import ResizePanel from "react-resize-panel";
import PropTypes from "prop-types";
import "../../sass/app/components/pop.scss";

const Pop = ({ children, title, visible, onCancel }) => {
  return (
    <Fragment>
      {visible ? (
        <div className="wrapper-pop">
          <ResizePanel  style={{width:"calc(100% - 50rem)",height:"100%" }} direction="e">
            <div style={{width:"100%"}} onClick={onCancel}></div>
          </ResizePanel>
          <div className="pop-default">
            <div className="pop-header">
              <h2>{title}</h2>
              <Button
                icon={<i className="ri-close-line" />}
                onClick={() => onCancel()}
              ></Button>
            </div>
            <div className="pop-content">{children}</div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

Pop.defaultProps = {
  title: "",
  visible: false,
};
Pop.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  width: PropTypes.string,
};

export default Pop;
