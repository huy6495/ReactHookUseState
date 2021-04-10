import React, { Component } from "react";
import DanhSachSPProps from "./DanhSachSPProps";
import phoneData from "../../data/phoneData.json";
import Modal from "./Modal";
import SanPham from "./SanPham";

export default class BaiTapPropsFunction extends Component {
  state = { mangGioHang: [] };

  themGioHang = (sp) => {
    let index = this.state.mangGioHang.findIndex((o) => o.maSP === sp.maSP);
    if (index === -1) {
      let spGioHang = { ...sp, soLuong: 1 };
      this.setState({ mangGioHang: [...this.state.mangGioHang, spGioHang] });
      return;
    }
    let spCu = this.state.mangGioHang[index];
    let soLuongMoi = spCu.soLuong + 1;
    let spTang = [{ ...spCu, soLuong: soLuongMoi }];
    let mangMoi = this.state.mangGioHang.map(
      (sp) => spTang.find((o) => o.maSP === sp.maSP) || sp
    );
    this.setState({ mangGioHang: mangMoi });
  };

  themSoLuong = (sp) => {
    let slThem = sp.soLuong + 1;
    let spTang = [{ ...sp, soLuong: slThem }];
    let mangMoi = this.state.mangGioHang.map(
      (sp) => spTang.find((o) => o.maSP === sp.maSP) || sp
    );
    this.setState({ mangGioHang: mangMoi });
  };

  giamSoLuong = (sp) => {
    if (sp.soLuong > 1) {
      let slGiam = sp.soLuong - 1;
      let spGiam = [{ ...sp, soLuong: slGiam }];
      let mangMoi = this.state.mangGioHang.map(
        (sp) => spGiam.find((o) => o.maSP === sp.maSP) || sp
      );
      this.setState({ mangGioHang: mangMoi });
    } else {
      this.xoaSP(sp);
    }
  };

  xoaSP = (sp) => {
    let mangMoi = this.state.mangGioHang.splice(
      1,
      this.state.mangGioHang.findIndex((o) => sp.maSP === o.maSP)
    );
    this.setState({ mangGioHang: mangMoi });
  };

  render() {
    return (
      <div>
        <h3 className="text-center text-success">
          Bài tập truyền props function
        </h3>
        <DanhSachSPProps mangDT={phoneData} themGioHang={this.themGioHang} />
        <Modal
          mangGioHang={this.state.mangGioHang}
          themSoLuong={this.themSoLuong}
          giamSoLuong={this.giamSoLuong}
          xoaSP={this.xoaSP}
        />
      </div>
    );
  }
}
