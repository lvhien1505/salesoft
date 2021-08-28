import React, { Fragment } from "react";
import { Pagination, Button, Input } from "antd";
import NumberFormat from 'react-currency-format'
import "../../sass/app/components/page.scss";

const PaginationCustom = ({ type, ...rest }) => {
  return (
    <Fragment>
      <div className="panigation-default">
        <Button className="first-page" type="primary">
          <i className="ri-arrow-left-s-line" />
          <i className="ri-arrow-left-s-line" />
        </Button>
        <Button
          className="pre-page"
          icon={<i className="ri-arrow-left-s-line" />}
          type="primary"
        ></Button>
        {type === "input" ? (
          <NumberFormat className="input-page" value={1}/>
        ) : type === "button" ? (
          <Pagination {...rest} />
        ) : null}
        <Button
          className="next-page"
          icon={<i className="ri-arrow-right-s-line" />}
          type="primary"
        ></Button>
        <Button className="last-page" type="primary">
          <i className="ri-arrow-right-s-line" />
          <i className="ri-arrow-right-s-line" />
        </Button>
      </div>
    </Fragment>
  );
};

export default PaginationCustom;
