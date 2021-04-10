import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSPProps extends Component {
  state = {
    spChiTiet: this.props.mangDT[0],
  };

  xemChiTiet = (sp) => {
    this.setState({ spChiTiet: sp });
  };

  renderSP = () => {
    let { themGioHang } = this.props;
    return this.props.mangDT.map((sp, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham
            SanPham={sp}
            xemCT={this.xemChiTiet}
            themGioHang={themGioHang}
          />
        </div>
      );
    });
  };

  render() {
    let {
      hinhAnh,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
    } = this.state.spChiTiet;
    return (
      <div className="container">
        <div className="row">{this.renderSP()}</div>
        <hr></hr>
        <div className="container">
          <h4 className="text-center text-info">Thông tin chi tiết sản phẩm</h4>
          <div className="row">
            <div className="col-6">
              <img src={hinhAnh}></img>
            </div>
            <div className="col-6 container">
              <h5 className="text-center">Mô tả</h5>
              <table className="text-center table">
                <tr>
                  <th>Tên SP:</th>
                  <th>{tenSP}</th>
                </tr>
                <tr>
                  <th>Màn hình:</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành:</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera Trước:</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera Sau:</th>
                  <th>{cameraSau}</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
