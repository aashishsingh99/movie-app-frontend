import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { addMovie } from '../../actions/movie';
import NotAuth from '../../components/errors/NotAuth';
import PropTypes from 'prop-types';
import AddMovieComp from '../../components/movie/AddMovieComp';
const AddMovie = ({ auth: { role }, addMovie, movie: { error } }) => {
  const [formData, setFormData] = useState({
    startTime: '',
    reachTime: '',
    date: '',
    redirectToNewPage: false,
    fare: null,
  });

  if (formData.redirectToNewPage) {
    return <Redirect to='/movies' />;
  }
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChangeDate = e => {
    
    setFormData({ ...formData, date: e.val.date});
    
  };
  const onSubmit = async e => {
    e.preventDefault();

    await addMovie(formData);
    
    
    setFormData({ ...formData, redirectToNewPage: true });

    
  };
  if (role === 'admin') {
    return (
      <AddMovieComp
        formData={formData}
        onChange={onChange}
        onChangeDate={onChangeDate}
        onSubmit={onSubmit}
      >
        {' '}
      </AddMovieComp>
    );
  } else {
    return <NotAuth allowed='Admin' />;
  }
};
AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  movie: state.movie,
});

export default connect(mapStateToProps, { addMovie })(AddMovie);
