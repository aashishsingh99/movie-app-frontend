import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import MoviePageComp from '../../components/moviePage/MoviePageComp';

import { bookMovie } from '../../actions/booking';

import { getMovieById } from '../../actions/movie';
import { resetMovie } from '../../actions/booking';

const MoviePage = ({
  getMovieById,
  movie: { movie },
  auth,
  match,
  bookMovie,
  resetMovie,
}) => {
  useEffect(() => {
    
    getMovieById(match.params.id);
  }, [match.params.id]);
  return <MoviePageComp movie={movie} auth={auth} bookMovie={bookMovie} resetMovie={resetMovie}/>;
};

MoviePage.propTypes = {
  getMovieById: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  movie: state.movie,
  auth: state.auth,
  bookMovie: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { getMovieById, bookMovie,resetMovie })(MoviePage);
