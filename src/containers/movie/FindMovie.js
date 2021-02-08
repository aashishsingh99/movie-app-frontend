import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { findMovie } from '../../actions/movie';
import NotAuth from '../../components/errors/NotAuth';
import PropTypes from 'prop-types';
import FindMovieComp from '../../components/movie/FindMovieComp';
const FindMovie = ({ auth: { role }, findMovie }) => {
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    date: '',
    redirectToNewPage: false,
  });

  const { name, date } = formData;
  if (formData.redirectToNewPage) {
    return <Redirect to='/movies' />;
  }
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    findMovie(formData);
    setFormData({ ...formData, redirectToNewPage: true });
  };
  if (role === 'user') {
    return (
      <FindMovieComp formData={formData} onChange={onChange} onSubmit={onSubmit}>
        {' '}
      </FindMovieComp>
    );
  } else {
    return <NotAuth allowed='User' />;
  }
};
FindMovie.propTypes = {
  findMovie: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { findMovie })(FindMovie);
