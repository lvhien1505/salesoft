import _ from "lodash";

const getTabActive = (tabs, activeKey) => {
  let tabIndex = _.findIndex(tabs, (tab) => tab.key === activeKey);
  let tab = tabs[tabIndex];
  return {
    tabIndex,
    tab,
  };
};

const getProductActive = (products, id) => {
  let productIndex = _.findIndex(
    products,
    (product) => product.info._id === id
  );
  let product = products[productIndex];
  return {
    productIndex,
    product,
  };
};

const mathValueProduct = (product) => {
  let price = product.price_unit - product.sale_off;
  let price_real = price * product.count;
  product.price = price;
  product.price_real = price_real;
  return product;
};

const mathBill = (products, math, payment) => {
  let total_num = _.sumBy(products, (product) => product.count);
  let total_price = _.sumBy(products, (product) => product.price_real);
  if (math.sale_off > total_price) {
    math.sale_off = total_price;
  }
  let total_price_real = total_price - math.sale_off;
  let total_payment = payment || total_price_real;
  let total_excess = total_payment - total_price_real;

  math.total_num = total_num;
  math.total_price = total_price;
  math.total_price_real = total_price_real;
  math.total_payment = total_payment;
  math.total_excess = total_excess;
  return math;
};

export default (state, action) => {
  let targetTab = {};
  let targetProduct = {};
  switch (action.type) {
    case "EDIT_TAB":
      switch (action.payload.action) {
        case "add":
          let lastTab = state.tabs[state.tabs.length - 1];
          let newTabKey = parseInt(lastTab.key) + 1;
          state.tabs.push({
            key: newTabKey.toString(),
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
          });
          state.activeKey = newTabKey.toString();
          break;

        case "remove":
          state.tabs = state.tabs.filter((tab, index) => {
            if (tab.key === action.payload.targetKey) {
              if (index === 0) {
                state.activeKey = state.tabs[index + 1].key;
              } else {
                state.activeKey = state.tabs[index - 1].key;
              }

              return false;
            }
            return true;
          });
          break;
      }
      return { ...state };
    case "CHANGE_TAB":
      state.activeKey = action.payload.targetKey;
      return { ...state };
    case "CHANGE_TYPE_TAB":
      targetTab = getTabActive(state.tabs, state.activeKey);
      targetTab.tab.type = action.payload.tabType;
      return { ...state };
    case "SELECT_PRODUCT":
      targetTab = getTabActive(state.tabs, state.activeKey);

      targetProduct = getProductActive(
        targetTab.tab.tabData.products,
        action.payload.product._id
      );

      if (targetProduct.productIndex === -1) {
        targetTab.tab.tabData.products.push({
          info: action.payload.product,
          count: 1,
          price_unit: action.payload.product.price,
          price: action.payload.product.price,
          sale_off: 0,
          price_real: action.payload.product.price,
        });
      } else {
        targetProduct.product.count++;
        let product = mathValueProduct(targetProduct.product);
        targetProduct.product = product;

        targetTab.tab.tabData.products[targetProduct.productIndex] =
          targetProduct.product;
      }

      targetTab.tab.tabData.math = mathBill(
        targetTab.tab.tabData.products,
        targetTab.tab.tabData.math
      );

      state.tabs[targetTab.tabIndex] = targetTab.tab;

      return { ...state };

    case "REMOVE_PRODUCT":
      targetTab = getTabActive(state.tabs, state.activeKey);

      _.remove(
        targetTab.tab.tabData.products,
        (product) => product.info._id === action.payload.id
      );

      targetTab.tab.tabData.math = mathBill(
        targetTab.tab.tabData.products,
        targetTab.tab.tabData.math
      );

      return { ...state };
    case "RESIZE_NUM_PRODUCT":
      targetTab = getTabActive(state.tabs, state.activeKey);

      targetProduct = getProductActive(
        targetTab.tab.tabData.products,
        action.payload.product._id
      );

      targetProduct.product.count = action.payload.product.num;
      targetProduct.product = mathValueProduct(targetProduct.product);

      targetTab.tab.tabData.products[targetProduct.productIndex] =
        targetProduct.product;

      targetTab.tab.tabData.math = mathBill(
        targetTab.tab.tabData.products,
        targetTab.tab.tabData.math
      );

      return { ...state };

    case "SALE_OFF_PRODUCT":
      targetTab = getTabActive(state.tabs, state.activeKey);

      targetProduct = getProductActive(
        targetTab.tab.tabData.products,
        action.payload.product._id
      );

      targetProduct.product.sale_off = action.payload.product.valueSaleOff;
      targetProduct.product = mathValueProduct(targetProduct.product);

      targetTab.tab.tabData.products[targetProduct.productIndex] =
        targetProduct.product;

      targetTab.tab.tabData.math = mathBill(
        targetTab.tab.tabData.products,
        targetTab.tab.tabData.math
      );

      return { ...state };
    case "CHANGE_VALUE_PAYMENT":
      targetTab = getTabActive(state.tabs, state.activeKey);
      let math = targetTab.tab.tabData.math;

      if (action.payload.type === "sale_off") {
        math.sale_off = action.payload.valueSaleOff;
        math.total_price_real = math.total_price - math.sale_off;
        math.total_payment = math.total_price_real;
      }
      if (action.payload.type === "payment") {
        math.total_payment = action.payload.valuePayment;
      }

      math.total_excess = math.total_payment - math.total_price_real;

      targetTab.tab.tabData.math = math;
      return { ...state };
    default:
      return { ...state };
  }
};
