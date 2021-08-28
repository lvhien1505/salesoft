import React, { useState } from "react";
import "../../sass/app/components/card.scss";
import PropTypes from "prop-types";

const Card = ({ children, title, icon, iconArrow,addClass}) => {
  const [toggleContent, setToggleContent] = useState(true);

  const handleToggleContent = () => setToggleContent(!toggleContent);
  return (
    <div className={"card-select" + `${addClass ? " " + addClass : ""}`}>
      <div className="card-select-header">
        <span>{title}</span>
        <div className="symbol-icon">
          {icon ? <div className="util-icon">{icon}</div> : null}
          {iconArrow ? (
            <div className="default-icon" onClick={handleToggleContent}>
              {toggleContent ? (
                <i className="ri-arrow-up-s-line" />
              ) : (
                <i className="ri-arrow-down-s-line"/>
              )}
            </div>
          ) : null}
        </div>
      </div>
      {toggleContent ? (
        <div className="card-select-content">{children}</div>
      ) : null}
    </div>
  );
};

Card.defaultProps = {
    title: "",
    iconArrow:true
  };
  Card.propTypes = {
    title: PropTypes.string,
    iconArrow : PropTypes.bool
  };

export default Card;
