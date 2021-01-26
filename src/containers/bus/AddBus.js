import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { addBus } from '../../actions/bus';
import NotAuth from '../../components/errors/NotAuth';
import PropTypes from 'prop-types';
import AddBusComp from '../../components/bus/AddBusComp';
const AddBus = ({ auth: { role }, addBus, bus: { error } }) => {
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    startTime: '',
    reachTime: '',
    date: '',
    redirectToNewPage: false,
  });

  if (formData.redirectToNewPage) {
    return <Redirect to='/buses' />;
  }
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    await addBus(formData);
    console.log('hi');
    // return <Redirect to='/dashboard' />;
    setFormData({ ...formData, redirectToNewPage: true });

    // if()
  };
  if (role === 'admin') {
    return (
      <AddBusComp formData={formData} onChange={onChange} onSubmit={onSubmit}>
        {' '}
      </AddBusComp>
    );
  } else {
    return <NotAuth allowed='Admin' />;
  }
};
AddBus.propTypes = {
  addBus: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  bus: state.bus,
});

export default connect(mapStateToProps, { addBus })(AddBus);
