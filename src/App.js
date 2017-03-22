import React, { Component } from 'react';
import './App.css';

import Netflix from './services/Netflix';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderMyList = this.renderMyList.bind(this);
    this.renderMyListTitles = this.renderMyListTitles.bind(this);
    this.renderRecommendations = this.renderRecommendations.bind(this);
  }

  render() {
    return (
      <div>
        <h1>My List</h1>

        <ol className="movie-list">
          {this.renderMyList()}
        </ol>

        <h1>Recommendations</h1>

        <ol className="movie-list">
          {this.renderRecommendations()}
        </ol>

        <h3>My list titles:</h3>

        <ol className="movie-list">
          {this.renderMyListTitles()}
        </ol>
      </div>
    );
  }

  renderMyList() {
    if (Netflix.mylist && Netflix.mylist.length) {
      return Netflix.mylist.map(function (movie) {
        return (
          <li className="movie-list-item">
            <img className="movie-list-item-image" src={ movie.img } />

            <div className="movie-list-item-button">
              {'Add'}
            </div>
          </li>
        );
      });
    }

    return null;
  }

  renderMyListTitles() {
    if (Netflix.mylist && Netflix.mylist.length) {
      return Netflix.mylist.map(function (movie, idx) {
        return (
          <div className="movie-list-item movie-list-item-text">
            { movie.title }
            { (idx !== (Netflix.mylist.length - 1)) && ', ' }
          </div>
        );
      });
    }
  }

  renderRecommendations() {
    if (Netflix.recommendations && Netflix.recommendations.length) {
      return Netflix.recommendations.map(function (movie) {
        return (
          <div className="movie-list-item">
            <img className="movie-list-item-image" src={ movie.img } />
          </div>
        );
      });
    }

    return null;
  }
}

export default App;
