import React, { useReducer, useMemo } from "react";
import Header from "./Header";
import Content from "./Content";
import SaleProvider from "../../state/provider/SaleProvider";
import SaleReducer from "../../state/reducer/SaleReducer";
import "../../sass/app/views/sale.scss";

const Sale = () => {
  const [state, dispatch] = useReducer(SaleReducer, {
    tabs: [
      {
        key: "1",
        type:"invoice",
        tabData: {
          products: [],
          math: {
            total_num: 0,
            total_price: 0,
            sale_off: 0,
            total_price_real: 0,
            total_payment: 0,
            total_excess: 0,
          },
        },
      },
    ],
    activeKey: "1",
  });
  return useMemo(() => {
    return (
      <div className="sale-screen">
        <SaleProvider
          store={{
            data: state,
            dispatch,
          }}
        >
          <Header />
          <Content />
        </SaleProvider>
      </div>
    );
  });
};

export default Sale;
