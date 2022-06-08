import React, { Component } from "react";
import TopHeader from "./TopHeader";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import MovieDetails from "./MovieDetails";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "nowShowing",
      language: [],
      genre: [],
      format: [],
      showDetails: false,
      showMovie: {},
    };
    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onSelectLanguage = this.onSelectLanguage.bind(this);
    this.onSelectGenre = this.onSelectGenre.bind(this);
    this.onSelectFormat = this.onSelectFormat.bind(this);
    this.onSelectMovie = this.onSelectMovie.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }
  onSelectCategory(category) {
    this.setState({ ...this.state, category });
  }

  onSelectLanguage(language, keep) {
    if (keep) {
      this.setState({
        ...this.state,
        language: [...this.state.language, language],
      });
    } else {
      this.setState({
        ...this.state,
        language: this.state.language.filter((item) => item !== language),
      });
    }
  }

  onSelectGenre(genre, keep) {
    if (keep) {
      this.setState({
        ...this.state,
        genre: [...this.state.genre, genre],
      });
    } else {
      this.setState({
        ...this.state,
        genre: this.state.genre.filter((item) => item !== genre),
      });
    }
  }

  onSelectFormat(format, keep) {
    if (keep) {
      this.setState({
        ...this.state,
        format: [...this.state.format, format],
      });
    } else {
      this.setState({
        ...this.state,
        format: this.state.format.filter((item) => item !== format),
      });
    }
  }

  onSelectMovie(movie) {
    this.setState({ ...this.state, showDetails: true, showMovie: movie });
  }

  onBackClick() {
    this.setState({
      ...this.state,
      showDetails: false,
      language: [],
      genre: [],
      format: [],
    });
  }

  render() {
    return (
      <div>
        <TopHeader />
        {this.state.showDetails ? (
          <MovieDetails
            onShow={this.state.showMovie}
            onBack={this.onBackClick}
          />
        ) : (
          <div>
            <Header category={this.onSelectCategory} />
            <div className="panels">
              <LeftPanel
                language={this.onSelectLanguage}
                genre={this.onSelectGenre}
                format={this.onSelectFormat}
              />
              <RightPanel
                category={this.state.category}
                language={this.state.language}
                genre={this.state.genre}
                format={this.state.format}
                onSelect={this.onSelectMovie}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
