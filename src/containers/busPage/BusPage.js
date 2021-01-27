import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import BusPageComp from '../../components/busPage/BusPageComp';

import { bookBus } from '../../actions/booking';

import { getBusById } from '../../actions/bus';
import { resetBus } from '../../actions/booking';

const BusPage = ({
  getBusById,
  bus: { bus },
  auth,
  match,
  bookBus,
  resetBus,
}) => {
  useEffect(() => {
    console.log('hi');
    getBusById(match.params.id);
  }, [match.params.id]);
  return <BusPageComp bus={bus} auth={auth} bookBus={bookBus} resetBus={resetBus}/>;
};

BusPage.propTypes = {
  getBusById: PropTypes.func.isRequired,
  bus: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  bus: state.bus,
  auth: state.auth,
  bookBus: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { getBusById, bookBus,resetBus })(BusPage);
