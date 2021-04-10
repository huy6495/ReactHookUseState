import React, { Component } from "react";
import Cart from "./Cart";
import Productitem from "./Productitem";

export default class Products extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  renderProduct = () =>
    this.arrProduct.map((sp, index) => (
      <Productitem
        key={index}
        sp={sp}
        xemChiTiet={this.xemChiTiet}
        themGioHang={this.themGioHang}
      />
    ));

  state = {
    sanPham: this.arrProduct[0],
    gioHang: [],
  };

  xemChiTiet = (sp) => {
    this.setState({ sanPham: sp });
  };

  themGioHang = (sp) => {
    let spGioHang = {
      maSP: sp.maSP,
      tenSP: sp.tenSP,
      gia: sp.giaBan,
      soLuong: 1,
      hinhAnh: sp.hinhAnh,
    };
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat = [...gioHangCapNhat, spGioHang];
    }
    this.setState({ gioHang: gioHangCapNhat });
  };

  giamSoLuong = (sp) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((i) => i.maSP === sp.maSP);
    if (gioHangCapNhat[index].soLuong > 1) {
      gioHangCapNhat[index].soLuong += -1;
      this.setState({ gioHang: gioHangCapNhat });
    } else {
      this.xoaSP(sp);
    }
  };

  xoaSP = (sp) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((i) => i.maSP === sp.maSP);
    gioHangCapNhat.splice(index, 1);
    this.setState({ gioHang: gioHangCapNhat });
  };

  render() {
    let {
      manHinh,
      tenSP,
      hinhAnh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      rom,
      ram,
    } = this.state.sanPham;
    return (
      <div>
        <Cart
          gioHang={this.state.gioHang}
          themGioHang={this.themGioHang}
          giamSoLuong={this.giamSoLuong}
          xoaSP={this.xoaSP}
        />
        <h3 className="text-center display-4">Danh sách sản phẩm</h3>
        <div className="container">
          <div className="row text-center">{this.renderProduct()}</div>
        </div>
        <div className="container">
          <h4 className="text-center text-success">Thông số kỹ thuật</h4>
          <div className="row">
            <div className="col 6">
              <h3 className="text-center">{tenSP}</h3>
              <img width={500} src={hinhAnh} alt={tenSP}></img>
            </div>
            <div className="col-6">
              <table class="table mt-5">
                <tbody>
                  <tr>
                    <td className="font-weight-bold">Màn hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Hệ điều hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Camare trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">Camare sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">ROM</td>
                    <td>{rom}</td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold">RAM</td>
                    <td>{ram}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
