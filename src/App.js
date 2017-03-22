import React, { Component } from 'react';
import './App.css';

import MovieList from './components/MovieList';
import Netflix from './services/Netflix';

class App extends Component {
  constructor(props) {
    super(props);

    this.addToMyList = this.addToMyList.bind(this);
    this.removeFromMyList = this.removeFromMyList.bind(this);
  }

  render() {
    return (
      <div>
        <h1>My List</h1>

        <MovieList
          buttonText='Remove'
          movies={Netflix.mylist} 
          onClickButton={this.removeFromMyList}
        />

        <h1>Recommendations</h1>

        <MovieList 
          buttonText='Add'
          movies={Netflix.recommendations} 
          onClickButton={this.addToMyList}
        />

        <h3>My list titles:</h3>

        <MovieList 
          movies={Netflix.mylist} 
          showButton={false}
          titleOnly={true} 
        />
      </div>
    );
  }

  addToMyList(movie) {
    console.log('Adding', movie.title, 'to my list!');
  }

  removeFromMyList(movie) {
    console.log('Removing', movie.title, 'from my list!');
  }
}

export default App;
