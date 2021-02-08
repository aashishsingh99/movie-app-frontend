import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem'
import { Row, Col, Card, Icon, Button } from 'react-materialize';

const ViewCurMoviesComp = ({ movies }) => {
  return (
    <Fragment>
      {(
        <Fragment>
          <Row>
          <center><h1 className='large text-primary'>Movies </h1></center>
          <div>
            {movies.length > 0 ? (
              movies.map(movie => (
                <MovieItem key={movie._id} movie={movie} />
              ))
            ) : (
              <h4>No movies found...</h4>
            )}
          </div>
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
};

ViewCurMoviesComp.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default ViewCurMoviesComp;
