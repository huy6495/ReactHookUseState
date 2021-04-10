import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { SanPham, xemCT, themGioHang } = this.props;
    let { hinhAnh, tenSP, giaBan } = this.props.SanPham;

    return (
      <div className="card text-left">
        <img className="card-img-top" src={hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{giaBan}</p>
          <button className="btn btn-success" onClick={() => xemCT(SanPham)}>
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => themGioHang(SanPham)}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
