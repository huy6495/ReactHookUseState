import React, { Component } from "react";
import BT1Carousel from "./BT1Carousel";
import BT1Header from "./BT1Header";
import BT1ProductList from "./BT1ProductList";

export default class BaiTapLayout1 extends Component {
  render() {
    return (
      <div>
        <BT1Header />
        <BT1Carousel />
        <BT1ProductList />
      </div>
    );
  }
}
