import React, { Component } from "react";

export default class Cart extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{this.props.gioHang.indexOf(item) + 1}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} width="50"></img>
          </td>
          <td>{item.gia.toLocaleString()}</td>
          <td>
            <span className="container">
              <button
                className="btn btn-danger"
                onClick={() => this.props.giamSoLuong(item)}
              >
                -
              </button>
            </span>
            {item.soLuong}
            <span className="container">
              <button
                className="btn btn-success"
                onClick={() => this.props.themGioHang(item)}
              >
                +
              </button>
            </span>
          </td>
          <td>{item.gia * item.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaSP(item);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1> Giỏ hàng (1)</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình Ảnh</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
