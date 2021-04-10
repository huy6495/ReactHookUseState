import React, { Component } from "react";

export default class CardProduct extends Component {
  render() {
    return (
      <div>
        <div className="card text-left">
          <img
            className="card-img-top"
            src="http://picsum.photos/180/180"
            alt="123"
          />
          <div className="card-body">
            <h4 className="card-title">Iphone 10</h4>
            <p className="card-text">100</p>
          </div>
        </div>
      </div>
    );
  }
}
