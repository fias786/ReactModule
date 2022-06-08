import React, { Component } from "react";

export default class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onSelectLanguageHandle = this.onSelectLanguageHandle.bind(this);
    this.onSelectGenreHandle = this.onSelectGenreHandle.bind(this);
    this.onSelectFormatHandle = this.onSelectFormatHandle.bind(this);
    this.onClickCollapsible = this.onClickCollapsible.bind(this);
  }
  onClickCollapsible() {
    this.setState({ isActive: !this.state.isActive });
  }
  onSelectLanguageHandle(e) {
    this.props.language(e.target.value, e.target.checked);
  }
  onSelectGenreHandle(e) {
    this.props.genre(e.target.value, e.target.checked);
  }
  onSelectFormatHandle(e) {
    this.props.format(e.target.value, e.target.checked);
  }
  render() {
    return (
      <div className="left-panel">
        <div
          className="collapsible"
          htmlFor="language"
          onClick={this.onClickCollapsible}
        >
          <span>
            <img
              id={this.state.isActive && "flipped"}
              src={require("./images/down-arrow.svg")}
            />
          </span>
          Select Language
        </div>
        {this.state.isActive && (
          <div
            className="collapsible collapsible-language"
            onChange={this.onSelectLanguageHandle}
          >
            <input value="Tamil" type="checkbox" />
            Tamil
            <br />
            <input value="English" type="checkbox" />
            English
            <br />
            <input value="Hindi" type="checkbox" />
            Hindi
          </div>
        )}
        <div
          className="collapsible"
          htmlFor="genre"
          onClick={this.onClickCollapsible}
        >
          <span>
            <img
              id={this.state.isActive && "flipped"}
              src={require("./images/down-arrow.svg")}
            />
          </span>
          Select Gener
        </div>
        {this.state.isActive && (
          <div
            className="collapsible collapsible-genre"
            onChange={this.onSelectGenreHandle}
          >
            <input value="Action" type="checkbox" />
            Action
            <br />
            <input value="Comedy" type="checkbox" />
            Comedy
            <br />
            <input value="Horror" type="checkbox" />
            Horror
            <br />
            <input value="Commercial" type="checkbox" />
            Commercial
            <br />
            <input value="Disney" type="checkbox" />
            Disney
          </div>
        )}
        <div
          className="collapsible"
          htmlFor="format"
          onClick={this.onClickCollapsible}
        >
          <span>
            <img
              id={this.state.isActive && "flipped"}
              src={require("./images/down-arrow.svg")}
            />
          </span>
          Select Format
        </div>
        {this.state.isActive && (
          <div
            className="collapsible collapsible-format"
            onChange={this.onSelectFormatHandle}
          >
            <input value="2D" type="checkbox" />
            2D
            <br />
            <input value="3D" type="checkbox" />
            3D
          </div>
        )}
      </div>
    );
  }
}
