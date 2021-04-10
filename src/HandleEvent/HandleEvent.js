import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello Huy");
  };

  showMess = (name) => {
    alert(`Hello ${name}`);
  };

  render() {
    return (
      <div>
        <button id="btnClick" onClick={this.handleClick}>
          Click me
        </button>
        <button
          id="btnClick"
          onClick={() => {
            alert("Hello Huy");
          }}
        >
          Click me
        </button>

        <button
          className="btn btn-success mt-2"
          onClick={() => {
            this.showMess("Huy");
            this.showMess("Khải");
          }}
        >
          Show message
        </button>
      </div>
    );
  }
}
