import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { FindMovie } from '../../actions/movie';
import NotAuth from '../../components/errors/NotAuth';
import PropTypes from 'prop-types';
import ViewCurMoviesComp from '../../components/movie/ViewCurMoviesComp';
const ViewCurMovies = ({ movie: { movies } }) => {
  return <ViewCurMoviesComp movies={movies} />;
};
ViewCurMovies.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(ViewCurMovies);
