import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import img from '../../img/black-white-bus.png'
const MovieItem = ({ movie }) => {
  return (
    

    <Col l={4} m={6} s={12}>
      <Card
        actions={[
          <Link to={`/movies/${movie._id}`} className='btn btn-primary'>
            View Movie
          </Link>,
        ]}
        closeIcon={<Icon>close</Icon>}
        header={
          <CardTitle image={img} className='text-dark lead'> {movie.name}{' '}<br/>{'Movie'}</CardTitle>
        }
        horizontal
        revealIcon={<Icon>more_vert</Icon>}
      >
        {movie.startTime}
        <br/>
        {movie.reachTime}
        <br/>
        {movie.date}
        <br/>
        {movie.fare}
      </Card>
    </Col>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
