import React, { Component } from "react";
import data from "../../data/data.json";
import Phim_RCC from "./Phim_RCC";
import Phim_RFC from "./Phim_RFC";

export default class BaiTapVongLap extends Component {
  mangPhim = data;

  renderCardPhim = () => {
    return this.mangPhim.map((phim, index) => (
      <div className="col-4" key={index} style={{ marginTop: "1rem" }}>
        {/* <Phim_RFC phimIn={phim} /> */}
        <Phim_RCC phimIn={phim} />
        {/* <div className="card" style={{ width: "18rem" }}>
          <div
            style={{
              height: "300px",
              width: "100%",
              backgroundImage: `url(${phim.hinhAnh})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="card-body">
            <h5 className="card-title">{phim.tenPhim}</h5>
            <p className="card-text" height={150}>
              {phim.moTa.length > 100
                ? phim.moTa.substr(0, 100) + "..."
                : phim.moTa}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
      </div>
    ));
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center text-success">Render các card Phim</h2>
        <div className="row">{this.renderCardPhim()}</div>
      </div>
    );
  }
}
