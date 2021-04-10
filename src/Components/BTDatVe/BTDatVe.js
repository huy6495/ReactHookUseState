import React, { Component } from "react";
import DanhSachGhe from "./DanhSachGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import "../../assets/BaiTapBookingTicket.css";

export default class BTDatVe extends Component {
  render() {
    return (
      <div className="bookingMovie">
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="row">
            <div className="col-8">
              <DanhSachGhe />
            </div>
            <div className="col-2">
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
