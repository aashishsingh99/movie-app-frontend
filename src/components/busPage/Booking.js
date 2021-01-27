import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Booking = ({ seats, id }) => {
    
    for (let index = 0; index < seats.length; index++) {
        const seat = seats[index];
       // if(seat===null)
      //  console.log(index);
    }
    const cancel=()=>{

    }
    if(seats.includes(id)){
    return <Fragment>
        <h3> You are already booked </h3>
        <button onClick={cancel}> Cancel </button>
    </Fragment>
    }
    
  return <Fragment>
    
  </Fragment>;
};

Booking.propTypes = {};

export default Booking;
