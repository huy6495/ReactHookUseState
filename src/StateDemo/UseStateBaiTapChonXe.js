import React, { useState } from "react";

const mangBtn = ["black", "red", "silver", "steel"];

export default function BaiTapChonXe() {
  const [stateHinh, setStateHinh] = useState(
    "./img/car/products/black-car.jpg"
  );
  let renderBtn = () => {
    return mangBtn.map((mau, index) => (
      <button
        key={index}
        onClick={() => {
          setStateHinh(`./img/car/products/${mau}-car.jpg`);
        }}
        style={{
          backgroundColor: mau,
          cursor: "pointer",
          color: "white",
          marginLeft: "20px",
        }}
      >
        {mau}
      </button>
    ));
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Bài tập chọn xe</h1>
      <div className="container row">
        <div className="col-6">
          <img src={stateHinh} className="w-100"></img>
        </div>
        <div className="col-6">{renderBtn()}</div>
      </div>
    </div>
  );
}
