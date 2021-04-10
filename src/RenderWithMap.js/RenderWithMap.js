import React, { Component } from "react";

export default class RenderWithMap extends Component {
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

  renderProduct = () =>
    this.productList.map((product, index) => (
      <div key={index} className="card text-left col-3 mx-3">
        <img className="card-img-top" src={product.img} alt={product.name} />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.price}</p>
        </div>
      </div>
    ));

  renderProduct2 = () =>
    this.productList.map((product, index) => (
      <tr key={index} className="text-left col-3 mx-3">
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>
          <img src={product.img} alt={product.name}></img>
        </td>
        <td>{product.price}</td>
      </tr>
    ));

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center">Danh Sách Sản phẩm</h1>
          <div className="row"> {this.renderProduct()}</div>
        </div>

        <div className="mt-5 container text-center">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>img</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>{this.renderProduct2()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
