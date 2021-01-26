import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import BusItem from './BusItem'
const ViewCurBusesComp = ({ buses }) => {
  return (
    <Fragment>
      {(
        <Fragment>
          <h1 className='large text-primary'>Buses </h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            developers
          </p>
          <div className='profiles'>
            {buses.length > 0 ? (
              buses.map(bus => (
                <BusItem key={bus._id} bus={bus} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

ViewCurBusesComp.propTypes = {
    buses: PropTypes.array.isRequired,
};

export default ViewCurBusesComp;
