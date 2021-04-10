import React, { Component } from "react";

export default class Databinding extends Component {
  sinhVien = {
    ma: 1,
    ten: "Nguyễn Văn Tèo",
  };

  renderSinhVien = () => {
    let sinhVien = {
      ma: 1,
      ten: "Nguyen Van Ti",
      hinhAnh: "http://picsum.photos/100/100",
    };

    return (
      <div className="card text-left">
        <img
          className="card-img-top"
          src={sinhVien.hinhAnh}
          alt={sinhVien.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sinhVien.ten}</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
    );
  };

  // Databinding la co che hien thi du lieu len thanh phan giao dien
  render() {
    let name = "Cybersoft";

    let product = {
      id: 1,
      name: "IphoneX",
      price: 1000,
      img: "https://picsum.photos/100/100",
    };

    let renderProduct = () => {
      //Khi noi dung return la component thi phai duoc bao phu boi 1 the
      return (
        <div>
          <p>{product.name}</p>
        </div>
      );
    };

    return (
      <div className="container">
        <ul>
          <li>Mã số sv:{this.sinhVien.ma}</li>
          <li>Mã số sv:{this.sinhVien.ten}</li>
        </ul>
        <p id="title">{name}</p>
        <br />
        <div className="card text-left w-25">
          <img className="card-img-top" src={product.img} alt />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price}</p>
          </div>
        </div>
        {renderProduct()}

        {this.renderSinhVien()}
      </div>
    );
  }
}
