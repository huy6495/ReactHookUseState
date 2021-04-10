import React, { Component } from "react";

export default class SanPhamProps extends Component {
  //this.props dùng để nhận giá trị từ component cha
  //this.props khong gan lai gia tri duoc

  render() {
    let { img, name, price } = this.props.sanPham;
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src={img} alt />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
