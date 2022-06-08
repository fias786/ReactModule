import React, { Component } from "react";

export default class TopHeader extends Component {
  render() {
    return (
      <nav className="nav topheader">
        <img src={require("./images/movieLogo.png")} />
        <ul>
          <li>Term Insurance</li>
          <li>Customer Service</li>
          <li>About Us</li>
        </ul>
      </nav>
    );
  }
}
