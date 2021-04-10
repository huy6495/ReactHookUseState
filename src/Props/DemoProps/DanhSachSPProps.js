import React, { Component } from "react";
import SanPhamProps from "./SanPhamProps";

export default class DanhSachSPProps extends Component {
  //Component sử dụng thẻ được gọi là component cha, thẻ được sd là component con
  productList = [
    {
      id: 1,
      name: "Iphone X",
      price: 1000,
      img: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      name: "Samsung Galaxy S8",
      price: 2000,
      img: "https://picsum.photos/200/201",
    },
    {
      id: 3,
      name: "Sony X1",
      price: 3000,
      img: "https://picsum.photos/200/202",
    },
  ];

  renderSP = () =>
    this.productList.map((sp, i) => (
      <div className="col-4" key={i}>
        <SanPhamProps sanPham={sp} />
      </div>
    ));

  render() {
    return (
      <div className="container mt-5">
        <div className="row">{this.renderSP()}</div>
      </div>
    );
  }
}
