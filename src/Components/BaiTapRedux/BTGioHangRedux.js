import React, { Component } from "react";
import ModalGioHangRedux from "./ModalGioHangRedux";
import ProductListRedux from "./ProductListRedux";

export default class extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center text-success">Bài tập giỏ hàng Redux</h3>
        <ModalGioHangRedux />
        <ProductListRedux />
      </div>
    );
  }
}
