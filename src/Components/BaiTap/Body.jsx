import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <>
        <Banner />
        <div className="container px-lg-5 mb-5">
          <div className="row   gx-lg-5">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </>
    );
  }
}
