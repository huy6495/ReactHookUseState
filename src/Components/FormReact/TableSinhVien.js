import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  renderTable = () => {
    return this.props.mangSinhVien.map((sv, index) => {
      return (
        <tr key={index}>
          <td>{sv.maSinhVien}</td>
          <td>{sv.tenSinhVien}</td>
          <td>{sv.email}</td>
          <td>{sv.soDienThoai}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                //Gui ma sv len reducer
                this.props.dispatch({
                  type: "XOA_SV",
                  maSinhVien: sv.maSinhVien,
                });
              }}
            >
              Xoa
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                //Gui ma sv len reducer
                this.props.dispatch({
                  type: "SUA_SV",
                  maSinhVien: sv.maSinhVien,
                });
              }}
            >
              Sua
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QLSVReducer.mangSinhVien,
  };
};

export default connect(mapStateToProps)(TableSinhVien);
