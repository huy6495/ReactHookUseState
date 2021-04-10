import React, { Component } from "react";
import "./BTBurger.css";
import { connect } from "react-redux";

class BTBurger extends Component {
  renderBurger = () => {
    return this.props.BurgerProps.map((item, index) => {
      return (
        <div key={index}>
          {(function () {
            let content = [];
            for (let i = 0; i < item.soLuong; i++) {
              content.push(<div className={item.name} key={i}></div>);
            }
            return content;
          })()}
        </div>
      );
    });
  };

  renderMenu = () => {
    let capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    let thanhTien = 0;
    let contentFull = [];
    this.props.BurgerProps.map((item, index) => {
      thanhTien += item.soLuong * item.gia;
      contentFull.push(
        <tr key={index}>
          <th>{capitalizeFirstLetter(item.name)}</th>
          <td>{item.gia}$</td>
          <td>
            <span className="container">
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.props.TangGiam(index, -1);
                }}
              >
                -
              </button>
            </span>
            {item.soLuong}
            <span className="container">
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.TangGiam(index, 1);
                }}
              >
                +
              </button>
            </span>
          </td>
          <td>{item.soLuong * item.gia}$</td>
        </tr>
      );
    });
    contentFull.push(
      <tr key="tongTien">
        <td colSpan={3}>Tổng tiền</td>
        <td>{thanhTien}$</td>
      </tr>
    );
    return contentFull;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" col-8">
            <div className="breadTop"></div>
            {this.renderBurger()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-4">
            <h3>Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    BurgerProps: state.BurgerReducer.burger,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    TangGiam: (index, soLuong) => {
      const action = {
        type: "TANG_GIAM",
        index,
        soLuong,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BTBurger);
