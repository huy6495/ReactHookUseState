import React, { Component } from "react";

//Cách 1: import đường dẫn css từ file component
// import "./style.css";

//Cách 2: import css tại component
//Nó chỉ ảnh hưởng trong component này thôi, tuy nhiên cách gọi class có đôi khác style.class

import style from "./style.module.css";

export default class Styles extends Component {
  render() {
    return (
      <div>
        <div className={style.textGreen}>123</div>
        <div className={style["textGreen"]}>ahihi</div>
        <div className={`${style["textGreen"]} ${style["bg-black"]} display-4`}>
          ahihi2
        </div>

        <div style={{ backgroundColor: "lime", color: "black" }}>component</div>
      </div>
    );
  }
}
