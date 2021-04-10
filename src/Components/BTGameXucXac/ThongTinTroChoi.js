import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <h2>
          Bạn chọn:{" "}
          <span className="text-danger">
            {this.props.banChon ? "TÀI" : "XỈU"}
          </span>
        </h2>
        <h2>
          Số bàn thắng:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </h2>
        <h2>
          Số bàn chơi: <span className="text-info">{this.props.soBanChoi}</span>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    banChon: state.XucXacReducer.banChon,
    soBanThang: state.XucXacReducer.soBanThang,
    soBanChoi: state.XucXacReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(ThongTinTroChoi);
