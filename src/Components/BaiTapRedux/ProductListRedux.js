import React, { Component } from "react";
import data from "../../data/phoneData.json";
import ProductRedux from "./ProductRedux";

//Viết phương thức render sản phẩm ra giao diện

export default class ProductListRedux extends Component {
  renderSanPham = () => {
    return data.map((sp, index) => (
      <div className="card text-left col-4" key={index}>
        <ProductRedux sp={sp} />
      </div>
    ));
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center text-warning">Danh sách sản phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
