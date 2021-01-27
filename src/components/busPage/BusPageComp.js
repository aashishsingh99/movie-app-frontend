import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ViewSeats from './ViewSeats';
import Booking from './Booking';
import './bus.css';
const BusPageComp = ({ bus, auth: { role, user }, bookBus, resetBus }) => {
  return (
    <Fragment>
      {bus === null ? (
        <h4> Loading... </h4>
      ) : (
        <Fragment>
          <h2> {bus.name} </h2>

          <Link to='/buses' className='btn btn-light'>
            Back To buses
          </Link>
          <ViewSeats seats={bus.seats} busId={bus._id} bookBus={bookBus} />
          {role === 'admin' ? (
            <Fragment >
              <h3>Hey Do you want to Reset this bus??? </h3>
              <button onClick={()=>{resetBus(bus._id)}}> Reset </button>
            </Fragment>
          ) : (
            <Fragment>
              {' '}
              <Booking seats={bus.seats} id={user._id} />{' '}
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

BusPageComp.propTypes = {
  bus: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  bookBus: PropTypes.func.isRequired,
  resetBus: PropTypes.func.isRequired,
  
};

export default BusPageComp;
