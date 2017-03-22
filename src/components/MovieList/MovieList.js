import classNames from 'classnames';
import React from 'react';

import MovieCard from '../MovieCard';

import './MovieList.css';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.renderMovies = this.renderMovies.bind(this);
  }

  render() {
    const { movies } = this.props;

    if (!movies || !movies.length) {
      return null;
    }

    return (
      <ol className="movie-list">
        { this.renderMovies() }
      </ol>
    );
  }

  renderMovies() {
    const {
      buttonText,
      movies,
      onClickButton,
      showButton,
      titleOnly,
    } = this.props;

    const listItemClasses = classNames(
      'movie-list-item',
      { 'movie-list-item-text': titleOnly },
    );

    return movies.map(function (movie, idx) {
      return (
        <li className={listItemClasses} key={ movie.id }>
          <MovieCard 
            buttonText={ buttonText }
            commaAfterTitle={ titleOnly && (idx !== (movies.length - 1)) }
            movie={ movie }
            onClick={ onClickButton }
            showButton={ showButton }
            titleOnly={ titleOnly } 
          />
        </li>
      );
    });
  }
}

MovieList.defaultProps = {
  buttonText: '',
  movies: [],
  onClickButton: () => {},
  showButton: true,
  titleOnly: false,
};

export default MovieList;
