import React, { Component } from "react";

export default class Productitem extends Component {
  render() {
    let { sp, xemChiTiet, themGioHang } = this.props;
    return (
      <div className="card text-left col-4">
        <img className="card-img-top" src={sp.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{sp.tenSP}</h4>
          <p className="card-text">{sp.giaBan}</p>
          <button className="btn btn-success" onClick={() => xemChiTiet(sp)}>
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger ml-3"
            onClick={() => themGioHang(sp)}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
