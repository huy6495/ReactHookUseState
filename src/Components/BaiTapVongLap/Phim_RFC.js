import React from "react";

export default function Phim_RFC({ phimIn, ...rest }) {
  let { hinhAnh, tenPhim, moTa } = phimIn;
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
