import React from 'react';

import './MovieCard.css';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  render() {
    return (
      <div className="movie-card">
        { this.renderContent() }
        { this.renderButton() }
      </div>
    );
  }

  renderButton() {
    if (!this.props.showButton) {
      return null;
    }

    return (
      <div className="movie-card-button">{'Add'}</div>
    );
  }

  renderContent() {
    const {
      commaAfterTitle,
      movie,
      titleOnly,
    } = this.props;

    if (titleOnly) {
      return (
        <span className="movie-card-title">
          { movie.title }
          { commaAfterTitle && ', ' }
        </span>
      );
    }

    return (
      <img
        alt={ movie.title }
        className="movie-card-image"
        src={ movie.img }
      />
    );
  }
}

MovieCard.defaultProps = {
  commaAfterTitle: false,
  movie: null,
  showButton: true,
  titleOnly: false,
};

export default MovieCard;
