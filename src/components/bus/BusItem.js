import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const BusItem = ({
    bus

}) => {
 
  return (
    <div className='profile bg-light'>
      <img src={'../../img/showcase.jpg'} alt='' className='round-img' />
      <div>
        <h2>{bus.name}</h2>
        <p>
          {bus.startTime} {bus.reachTime}
        </p>
        <Link to={`/buses/${bus._id}`} className='btn btn-primary'>
          View Bus
        </Link>
       
      </div>
      
    </div>
  );
};

BusItem.propTypes = {
  bus: PropTypes.object.isRequired,
};

export default BusItem;
