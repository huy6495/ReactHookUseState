import React, { Component } from "react";
import "./BTXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BTXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="container">
          <h1 className="py-5  text-center">GAME TÀI XỈU ĂN THUA</h1>
          <div className="row text-center">
            <div className="col-5">
              <button
                className="tai__xiu"
                onClick={() => {
                  this.props.btnChon(true);
                }}
              >
                TÀI
              </button>
            </div>
            <div className="col-2">
              <XucXac />
            </div>
            <div className="col-5">
              <button
                className="tai__xiu"
                onClick={() => {
                  this.props.btnChon(false);
                }}
              >
                XỈU
              </button>
            </div>
          </div>
          <div className="text-center">
            <ThongTinTroChoi />
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-success" onClick={this.props.btnPlay}>
              Play game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    btnChon: (trueFalse) => {
      dispatch({
        type: "BAN_CHON",
        trueFalse,
      });
    },
    btnPlay: () => {
      dispatch({
        type: "PLAY",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(BTXucXac);
