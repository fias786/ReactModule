import React, { Component } from "react";
import Card from "./Card";

import { nowShowing, comingSoon, exclusive } from "./MovieListJson";

export default class RightPanel extends Component {
  constructor(props) {
    super(props);
    this.onSelectHandler = this.onSelectHandler.bind(this);
  }
  onSelectHandler(e) {
    const idxpart = e.target.id.substring(5, 7);
    let movie = {};
    switch (idxpart[0]) {
      case "c":
        movie = comingSoon.find((item) => item.id === idxpart);
        break;
      case "e":
        movie = exclusive.find((item) => item.id === idxpart);
        break;
      case "s":
        movie = nowShowing.find((item) => item.id === idxpart);
        break;
    }
    this.props.onSelect(movie);
  }

  render() {
    const category = this.props.category;
    const language = this.props.language;
    const genre = this.props.genre;
    const format = this.props.format;

    const filter = (movie) => {
      if (!language.length && !genre.length && !format.length) {
        return true;
      }
      if (!language.length && !genre.length) {
        return format.includes(movie.format);
      }
      if (!language.length && !format.length) {
        return genre.includes(movie.gener);
      }
      if (!format.length && !genre.length) {
        return language.includes(movie.language);
      }
      if (!language.length) {
        return genre.includes(movie.gener) && format.includes(movie.format);
      }
      if (!genre.length) {
        return (
          language.includes(movie.language) && format.includes(movie.format)
        );
      }
      if (!format.length) {
        return genre.includes(movie.gener) && language.includes(movie.language);
      }
      return (
        language.includes(movie.language) &&
        genre.includes(movie.gener) &&
        format.includes(movie.format)
      );
    };

    let movieList = "";
    if (category === "comingSoon") {
      movieList = comingSoon.filter((movie) => filter(movie));
    } else if (category === "exclusive") {
      movieList = exclusive.filter((movie) => filter(movie));
    } else {
      movieList = nowShowing.filter((movie) => filter(movie));
    }

    return (
      <div className="right-panel">
        {movieList.map((movie, i) => (
          <Card
            key={movie.id}
            id={`card${movie.id}`}
            img={movie.src}
            index={movie.id}
            onClickCard={this.onSelectHandler}
          />
        ))}
      </div>
    );
  }
}
