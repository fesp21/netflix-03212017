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

        {this.renderMyList()}

        <h1>Recommendations</h1>

        {this.renderRecommendations()}

        <h3>My list titles:</h3>

        {this.renderMyListTitles()}
      </div>
    );
  }

  renderMyList() {
    if (Netflix.mylist && Netflix.mylist.length) {
      return Netflix.mylist.map(function (movie) {
        return (
          <div className="movie my-list-movie">
            <img className="movie-image" src={ movie.img } />
          </div>
        );
      });
    }

    return null;
  }

  renderMyListTitles() {
    if (Netflix.mylist && Netflix.mylist.length) {
      return Netflix.mylist.map(function (movie, idx) {
        return (
          <div className="movie my-list-title-movie">
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
          <div className="movie recommendation-movie">
            <img className="movie-image" src={ movie.img } />
          </div>
        );
      });
    }

    return null;
  }
}

export default App;
