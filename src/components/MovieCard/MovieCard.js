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
    const {
      buttonText,
      movie,
      onClick,
      showButton,
    } = this.props;

    if (!showButton) {
      return null;
    }

    return (
      <a className="movie-card-button" onClick={ onClick.bind(null, movie) }>
        { buttonText }
      </a>
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
  buttonText: '',
  commaAfterTitle: false,
  movie: null,
  onClick: () => {},
  showButton: true,
  titleOnly: false,
};

export default MovieCard;
