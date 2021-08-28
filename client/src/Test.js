import React, { useRef, Component } from "react";
import {Button} from 'antd'
import { Fragment } from "react";
import ReactToPrint,{useReactToPrint} from "react-to-print";
import { invoiceTemplate } from "./cache/printTemplate";

class Print extends Component {
  constructor(props) {
    super(props);
    this.initData = invoiceTemplate({
        products:[{name:"Bia Hà Nội",price_unit:"10,000",price:"5,000",count:1,price_real:"20,000"}]
    });
  }
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.initData }} style={{padding:"0 4rem"}}></div>;
  }
}

const Test = () => {
  const componentRef = useRef();
  const Printer = useReactToPrint({
      content:()=>componentRef.current
  })
  return (
    <div>
     
      <Button onClick={Printer}>Print</Button>
      <Print ref={componentRef} />
    </div>
  );
};

export default Test;
