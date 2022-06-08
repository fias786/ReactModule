import React, { Component } from "react";

import { theaterList } from "./MovieListJson";

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.showSummary = this.showSummary.bind(this);
    this.showTimings = this.showTimings.bind(this);
    this.state = {
      showSynopsis: true,
      showTiming: false,
    };
  }
  showSummary() {
    this.setState({ showSynopsis: true, showTiming: false });
  }
  showTimings() {
    this.setState({ showSynopsis: false, showTiming: true });
  }
  render() {
    const movie = this.props.onShow;
    return (
      <>
        <div id="parent">
          <div className="image-bg"></div>
          <div id="back-arrow" onClick={this.props.onBack}>
            <img src={require("./images/left-arrow.svg")} />
          </div>
          <div id="movie-name">{movie.name}</div>
          <img src={movie.src} id="movie-img" />
          <div className="tab">
            <ul>
              <li id="summary" onClick={this.showSummary}>
                Summary
              </li>
              <li id="showTimigs" onClick={this.showTimings}>
                Show Timings
              </li>
            </ul>
          </div>
        </div>
        {this.state.showSynopsis && (
          <div id="synopsis">
            <h3>Synopsis</h3>
            <p>{movie.synopsis}</p>
          </div>
        )}
        {this.state.showTiming && (
          <div id="timing">
            {theaterList.map((theater) => (
              <div key={theater.id}>
                <h3>{theater.name}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Seats</th>
                      <th>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {theater.showTimings.map((item, i) => (
                      <tr key={i}>
                        <td>{item.time}</td>
                        <td>{item.seats}</td>
                        <td>{item.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}
