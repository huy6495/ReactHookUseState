import React, { Component } from "react";

//Kết nối với reducerGioHang
import { connect } from "react-redux";

class ProductRedux extends Component {
  render() {
    let { sp } = this.props;
    return (
      <div className="container">
        <img className="card-img-top" src={sp.hinhAnh} alt={sp.maSP} />
        <div className="card-body">
          <h4 className="card-title">{sp.tenSP}</h4>
          <p className="card-text">{sp.giaBan}</p>
          <button className="btn btn-success">Xem chi tiết</button>
          <button
            className="btn btn-info ml-3"
            onClick={() => {
              this.props.themGioHang(sp);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

//Xây dựng props là hàm xử lý sự kiện, để đưa dữ liệu lên store
// Vậy thì nơi nào có nút xử lý thì ta viết hàm này ha

const MapDispatchToProps = (dispatch) => {
  //Hàm trên là redux định nghĩa, khúc dưới này mình mới định nghĩa nè
  return {
    //Tạo ra props là function (function này sẽ đưa dữ liệu lên store)

    //Nhung gi sinh ra trong day se sinh ra props cua component
    themGioHang: (sp) => {
      const spGioHang = {
        maSP: sp.maSP,
        tenSP: sp.tenSP,
        giaBan: sp.giaBan,
        soLuong: 1,
        hinhAnh: sp.hinhAnh,
      };
      //Tạo action đưa dữ liệu lên reducer
      const action = {
        type: "THEM_GIO_HANG",
        spGioHang: spGioHang,
      };
      dispatch(action);
    },
  };
};

export default connect(null, MapDispatchToProps)(ProductRedux);
