import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Row,Col} from 'react-materialize'
import ViewSeats from './ViewSeats';
import MoviePageNav from './MoviePageNav'
import './bus.css';
const MoviePageComp = ({ movie, auth: { role, user }, bookMovie, resetMovie }) => {
  
  return (
    <Fragment >
      
      {movie === null ? (
        <h4> Loading... </h4>
      ) : (
        <Fragment>
          
        <div className="busPageContainer">
          <Row>
            <Col l={4}>
          <ViewSeats movie={movie} bookMovie={bookMovie} role={role}/>
          </Col>
          <Col l={8}>
          <MoviePageNav id={user._id}seats={movie.seats} movie={movie}role={role} resetMovie={resetMovie} /> 
          </Col>
          </Row>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

MoviePageComp.propTypes = {
  movie: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  bookMovie: PropTypes.func.isRequired,
  resetMovie: PropTypes.func.isRequired,
  
};

export default MoviePageComp;
