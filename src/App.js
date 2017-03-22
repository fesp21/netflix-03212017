import React, { Component } from 'react';
import './App.css';

import MovieList from './components/MovieList';
import Netflix from './services/Netflix';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My List</h1>

        <MovieList movies={Netflix.mylist} />

        <h1>Recommendations</h1>

        <MovieList movies={Netflix.recommendations} />

        <h3>My list titles:</h3>

        <MovieList 
          movies={Netflix.mylist} 
          showButton={false}
          titleOnly={true} 
        />
      </div>
    );
  }
}

export default App;
