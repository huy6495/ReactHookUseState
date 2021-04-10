import React, { Component } from "react";

export default class Phim_RCC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hinhAnh, tenPhim, moTa } = this.props.phimIn;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div
            style={{
              height: "300px",
              width: "100%",
              backgroundImage: `url(${hinhAnh})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="card-body">
            <h5 className="card-title">{tenPhim}</h5>
            <p className="card-text">
              {moTa.length > 100 ? moTa.substr(0, 100) + "..." : moTa}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
