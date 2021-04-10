import React, { Component } from "react";
import dataGhe from "../../assets/danhSachGhe.json";
import { connect } from "react-redux";

class DanhSachGhe extends Component {
  renderHangGhe = () => {
    return dataGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <button className="rowNumber">{hangGhe.hang}</button>
          {this.renderDanhSachGhe(hangGhe.danhSachGhe, hangGhe.hang)}
        </div>
      );
    });
  };

  renderDanhSachGhe = (danhSachGhe, hangGhe) => {
    return danhSachGhe.map((ghe, index) => {
      let classGhe = hangGhe !== "" ? "ghe" : "rowNumber";
      let classGheDuocChon = ghe.daDat ? "gheDuocChon" : "";
      let indexGhe = this.props.DSGhe.findIndex(
        (gheInput) => gheInput.soGhe === ghe.soGhe
      );
      let classGheDangChon = "";
      if (indexGhe != -1) {
        classGheDangChon = "gheDangChon";
      }
      return ghe.daDat ? (
        <button
          key={index}
          className={`${classGhe} ${classGheDuocChon} ${classGheDangChon}`}
        >
          {ghe.soGhe}
        </button>
      ) : (
        <button
          key={index}
          className={`${classGhe} ${classGheDangChon}`}
          onClick={() => {
            this.props.chonGhe(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  render() {
    return (
      <div className="container mt-5 text-white">
        <h3 className="text-light text-center">
          Đặt vé xem phim CyberLearn.vn
        </h3>
        <div className="text-light text-center">Màn hình</div>
        <div className="text-center">
          <div className="screen"></div>
        </div>
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { DSGhe: state.baiTapDatVeReducer.danhSachGheDangDat };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chonGhe: (ghe) => {
      const action = {
        type: "CHON_GHE",
        ghe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe);
