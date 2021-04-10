import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () =>
    this.props.mangXucXacProps.map((item, index) => (
      <img
        key={index}
        style={{ width: 50, height: 50 }}
        src={item.hinhAnh}
        alt={item.hinhAnh}
      ></img>
    ));

  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXacProps: state.XucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
