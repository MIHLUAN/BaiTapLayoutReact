import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-lg-3" >
      <div className="card  text-center ">
      <img className="card-img-top" src={`https://i.pravatar.cc?u=${Math.floor(Math.random() * 10)}`} alt="Card image cap" style={{ height: "10rem" }}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
        
      </div>
    );
  }
}
