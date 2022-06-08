import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.onCategoryClickHandle = this.onCategoryClickHandle.bind(this);
  }
  onCategoryClickHandle(e) {
    e.preventDefault();
    this.props.category(e.currentTarget.id);
  }
  render() {
    return (
      <header>
        <ul>
          <li id="nowShowing" onClick={this.onCategoryClickHandle}>
            Now Showing
          </li>
          <li id="comingSoon" onClick={this.onCategoryClickHandle}>
            Coming Soon
          </li>
          <li id="exclusive" onClick={this.onCategoryClickHandle}>
            Exclusive
          </li>
        </ul>
      </header>
    );
  }
}
