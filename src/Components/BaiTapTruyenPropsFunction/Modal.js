import React, { Component } from "react";

export default class Modal extends Component {
  renderGioHang = () => {
    let stt = 0;
    let { themSoLuong, giamSoLuong, xoaSP } = this.props;
    let content = [];
    let tongTien = 0;
    content.push(
      this.props.mangGioHang.map((sp, index) => {
        let thanhTien = sp.soLuong * sp.giaBan;
        tongTien += thanhTien;
        return (
          <tr key={index}>
            <td>{(stt += 1)}</td>
            <td>{sp.tenSP}</td>
            <td>{sp.giaBan}</td>
            <td className="w-100">
              <span>
                <button
                  className="btn btn-danger"
                  onClick={() => giamSoLuong(sp)}
                >
                  -
                </button>
              </span>
              {sp.soLuong}
              <span>
                <button
                  className="btn btn-success"
                  onClick={() => themSoLuong(sp)}
                >
                  +
                </button>
              </span>
            </td>
            <td>{thanhTien}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  xoaSP(sp);
                }}
              >
                Xóa
              </button>
            </td>
          </tr>
        );
      })
    );
    content.push(
      <tr>
        <td>Tổng tiền</td>
        <td></td>
        <td></td>
        <td></td>
        <td>{tongTien}</td>
      </tr>
    );
    return content;
  };

  render() {
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGioHang()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
