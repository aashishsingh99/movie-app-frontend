import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { findBus } from '../../actions/bus';
import NotAuth from '../../components/errors/NotAuth';
import PropTypes from 'prop-types';
import FindBusComp from '../../components/bus/FindBusComp';
const FindBus = ({ auth: { role }, findBus }) => {
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    date: '',
    redirectToNewPage: false,
  });

  const { source, destination, date } = formData;
  if (formData.redirectToNewPage) {
    return <Redirect to='/buses' />;
  }
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    findBus(formData);
    setFormData({ ...formData, redirectToNewPage: true });
  };
  if (role === 'user') {
    return (
      <FindBusComp formData={formData} onChange={onChange} onSubmit={onSubmit}>
        {' '}
      </FindBusComp>
    );
  } else {
    return <NotAuth allowed='User' />;
  }
};
FindBus.propTypes = {
  findBus: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { findBus })(FindBus);
