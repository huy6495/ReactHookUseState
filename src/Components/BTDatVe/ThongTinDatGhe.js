import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  renderGhe = () => {
    return this.props.DanhSachGheProps.map((ghe, index) => {
      return (
        <tr key={index}>
          <th>{ghe.soGhe}</th>
          <th>{ghe.gia}</th>
          <th>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGhe(ghe);
              }}
            >
              X
            </button>
          </th>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="text-white">
        <h3 className="text-center mb-5">Danh Sách Ghế Đang Chọn</h3>
        <div className="text-left">
          <button className="gheDangChon"></button>Ghế đang chọn
        </div>
        <div className="text-left">
          <button className="ghe m-0"></button>Ghế chưa chọn
        </div>
        <div className="text-left">
          <button className="gheDuocChon"></button>Ghế đã chọn
        </div>

        <table className="table">
          <thead>
            <tr className="text-center text-light">
              <th>Số ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-white">{this.renderGhe()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    DanhSachGheProps: state.baiTapDatVeReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGhe: (ghe) => {
      const action = {
        type: "XOA_GHE",
        ghe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
