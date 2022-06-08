import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <img
          src={this.props.img}
          id={`image${this.props.index}`}
          onClick={this.props.onClickCard}
        />
      </div>
    );
  }
}
