import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { findBus } from '../../actions/bus';
import NotAuth from '../../components/errors/NotAuth';
import PropTypes from 'prop-types';
import ViewCurBusesComp from '../../components/bus/ViewCurBusesComp';
const ViewCurBuses = ({ bus: { buses } }) => {
  return <ViewCurBusesComp buses={buses} />;
};
ViewCurBuses.propTypes = {
  bus: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  bus: state.bus,
});

export default connect(mapStateToProps)(ViewCurBuses);
