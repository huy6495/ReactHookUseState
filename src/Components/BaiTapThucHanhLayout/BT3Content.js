import React, { Component } from "react";
import BT3Product from "./BT3Product";

export default class BT3Content extends Component {
  render() {
    return (
      <div className="container mt-5">
        <header class="jumbotron">
          <h1 class="display-3">A Warm Welcome!</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
            similique quaerat nam nobis illo aspernatur vitae fugiat numquam
            repellat.
          </p>
          <a href="#" class="btn btn-primary btn-lg">
            Call to action!
          </a>
        </header>
        <div className="row text-center">
          <BT3Product />
          <BT3Product />
          <BT3Product />
          <BT3Product />
        </div>
      </div>
    );
  }
}
