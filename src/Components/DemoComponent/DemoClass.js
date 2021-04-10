import React, { Component } from "react";

export default class DemoClass extends Component {
  //Phương thức render sẽ tụ kích hoạt khi mình sử dụng component
  render() {
    return (
      <div className="container">
        <p className="display-4 pt-2">Title</p>
        <p>Content</p>
      </div>
    );
  }
}
