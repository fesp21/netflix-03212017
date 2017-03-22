import React, { Component } from 'react';
import './App.css';

import MovieList from './components/MovieList';
import Netflix from './services/Netflix';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Netflix: Netflix,
    };

    this.addToMyList = this.addToMyList.bind(this);
    this.removeFromMyList = this.removeFromMyList.bind(this);
  }

  render() {
    const {
      mylist,
      recommendations,
    } = this.state.Netflix;

    return (
      <div>
        <h1>My List</h1>

        <MovieList
          buttonText='Remove'
          movies={mylist} 
          onClickButton={this.removeFromMyList}
        />

        <h1>Recommendations</h1>

        <MovieList 
          buttonText='Add'
          movies={recommendations} 
          onClickButton={this.addToMyList}
        />

        <h3>My list titles:</h3>

        <MovieList 
          movies={mylist} 
          showButton={false}
          titleOnly={true} 
        />
      </div>
    );
  }

  addToMyList(movie) {
    const { mylist } = this.state.Netflix;

    for (var i = 0; i < mylist.length; ++i) {
      if (movie.id === mylist[i].id) {
        return;
      }
    }

    Netflix.mylist.push(movie);

    this.setState({
      Netflix,
    });
  }

  removeFromMyList(movie) {
    const { mylist } = this.state.Netflix;

    for (var i = 0; i < mylist.length; ++i) {
      if (movie.id === mylist[i].id) {
        mylist.splice(i, 1);
        break;
      }
    }

    Netflix.mylist = mylist;

    this.setState({
      Netflix,
    });
  }
}

export default App;
