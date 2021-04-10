import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      numberObject: {
        number: 1,
      },
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return currentState;
  }

  // shouldComponentUpdate(newProps, newState) {
  //   return false;
  // }

  render() {
    return (
      <div className="container">
        {console.log("render")}
        <ChildComponent numO={this.state.numberObject} />
        <h1>{this.state.numberObject.number}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            let numberObject = { ...this.state.numberObject };
            numberObject.number += 1;
            this.setState({ numberObject: numberObject });
          }}
        >
          +
        </button>
        <hr></hr>
        <h3>Child component</h3>
        {/* {this.state.number < 3 ? <ChildComponent /> : ""} */}
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    //Hạn chế setState (muốn setState phải có if)
    console.log("componentDidUpdate");
  }
}
