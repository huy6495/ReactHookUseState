import React, { Component } from "react";

// Kết nối redux (connect là hàm kết nội giữa reactComponent với redux store)
import { connect } from "react-redux";

class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    let tongTien = 0;
    let content = [];
    this.props.gioHangProps.map((sp, index) => {
      let thanhTien = sp.giaBan * sp.soLuong;
      tongTien += thanhTien;
      content.push(
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img src={sp.hinhAnh} width={50} alt={sp.tenSP}></img>
          </td>
          <td>{sp.giaBan.toLocaleString()}</td>
          <td>
            <span className="container">
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.props.tangGiamSL(index, -1);
                }}
              >
                -
              </button>
            </span>
            {sp.soLuong}
            <span className="container">
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.tangGiamSL(index, 1);
                }}
              >
                +
              </button>
            </span>
          </td>
          <td>{thanhTien.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.xoaGioHangIndex(index);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
    content.push(
      <tr className="container text-right">
        <th colSpan={3}>Tổng cộng: </th>
        <th colSpan={4} className="pr-5">
          {tongTien}
        </th>
      </tr>
    );
    return content;
  };

  render() {
    //this.props.gioHang la thuoc tinh nhan tu redux

    return (
      <div className="container">
        <h1>Giỏ hàng(1)</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình Ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}

//Bien State cua Store tong thanh props cua component, va component se nhan thong qua cac Store nay
const mapStateToProps = (state) => {
  //State la store tong, truy suat den gioHangReducer, truy suat den bien State tren GioHangReducer
  return {
    gioHangProps: state.GioHangReducer.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      // console.log(index);
      const action = {
        type: "XOA_GIO_HANG",
        index: index,
      };
      //Đưa action lên reducer
      dispatch(action);
    },
    tangGiamSL: (index, sL) => {
      const action = {
        type: "TANG_GIAM_123",
        index: index,
        tangGiam: sL,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
