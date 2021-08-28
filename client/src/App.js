import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import Test from './Test'

// import view
// import public view
import Home from "./views/public/Home";

// import privater view
// import manage
const Overview = lazy(() => import("./views/manage/overview/main/Overview"));

const Product = lazy(() => import("./views/manage/merchandise/main/Product"));
const PriceBook = lazy(() => import("./views/manage/merchandise/main/PriceBook"));
const InventoryCount = lazy(() => import("./views/manage/merchandise/main/InventoryCount"));
const ScreenStockTake = lazy(() => import("./views/manage/merchandise/main/ScreenStockTake"));

const Order = lazy(() => import("./views/manage/transaction/main/Order"));
const Invoice = lazy(() => import("./views/manage/transaction/main/Invoice"));
const OrderDelivery = lazy(() => import("./views/manage/transaction/main/OrderDelivery"));
const Returns = lazy(() => import("./views/manage/transaction/main/Returns"));
const PurchaseOrder = lazy(() => import("./views/manage/transaction/main/PurchaseOrder"));
const ScreenPurchaseOrder = lazy(() => import("./views/manage/transaction/main/ScreenPurchaseOrder"));
const PurchaseReturns = lazy(() => import("./views/manage/transaction/main/PurchaseReturns"));

const Customer = lazy(() => import("./views/manage/partner/main/Customer"));
const Supplier = lazy(() => import("./views/manage/partner/main/Supplier"));
const Carrier = lazy(() => import("./views/manage/partner/main/Carrier"));

const EndOfDayReport = lazy(() => import("./views/manage/report/main/EndOfDay"));
const SaleReport = lazy(() => import("./views/manage/report/main/Sale"));
const OrderReport = lazy(() => import("./views/manage/report/main//Order"));
const ProductReport = lazy(() => import("./views/manage/report/main/Product"));
const CustomerReport = lazy(() => import("./views/manage/report/main/Customer"));
const SupplierReport = lazy(() => import("./views/manage/report/main/Supplier"));
const FinacialReport = lazy(() => import("./views/manage/report/main/Finacial"));

const CashFlow = lazy(() => import("./views/manage/cashflow/main/CashFlow"));

const User = lazy(() => import("./views/manage/utils/main/User"));
const Printer = lazy(() => import("./views/manage/utils/main/Printer"));

// import sale
const Sale = lazy(() => import("./views/sale/Sale"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>a</div>}>
        <Switch>
          <PublicRoute path="/" exact component={Home} />

          <PublicRoute path="/sale" exact component={Sale} />

          <PublicRoute path="/overview" exact component={Overview} />

          <PublicRoute path="/products" exact component={Product} />
          <PublicRoute path="/price-book" exact component={PriceBook} />
          <PublicRoute path="/stock-take" exact component={InventoryCount} />
          <PublicRoute path="/stock-take/screen" exact component={ScreenStockTake} />

          <PublicRoute path="/orders" exact component={Order} />
          <PublicRoute path="/invoices" exact component={Invoice} />
          <PublicRoute path="/order-delivery" exact component={OrderDelivery} />
          <PublicRoute path="/returns" exact component={Returns} />
          <PublicRoute path="/purchase-order" exact component={PurchaseOrder} />
          <PublicRoute path="/purchase-order/screen" exact component={ScreenPurchaseOrder} />
          <PublicRoute path="/purchase-returns" exact component={PurchaseReturns} />

          <PublicRoute path="/customers" exact component={Customer} />
          <PublicRoute path="/suppliers" exact component={Supplier} />
          <PublicRoute path="/carriers" exact component={Carrier} />

          <PublicRoute path="/report/end-of-day" exact component={EndOfDayReport} />
          <PublicRoute path="/report/sale" exact component={SaleReport} />
          <PublicRoute path="/report/order" exact component={OrderReport} />
          <PublicRoute path="/report/product" exact component={ProductReport} />
          <PublicRoute path="/report/customer" exact component={CustomerReport} />
          <PublicRoute path="/report/supplier" exact component={SupplierReport} />
          <PublicRoute path="/report/finacial" exact component={FinacialReport} />
          

          <PublicRoute path="/cashflow" exact component={CashFlow} />

          <PublicRoute path="/users" exact component={User} />
          <PublicRoute path="/print-template" exact component={Printer} />
          <PublicRoute path="/test" exact component={Test} />

        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
