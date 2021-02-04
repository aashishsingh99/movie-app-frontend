import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import BusItem from './BusItem'
import { Row, Col, Card, Icon, Button } from 'react-materialize';

const ViewCurBusesComp = ({ buses }) => {
  return (
    <Fragment>
      {(
        <Fragment>
          <Row>
          <center><h1 className='large text-primary'>Buses </h1></center>
          <div>
            {buses.length > 0 ? (
              buses.map(bus => (
                <BusItem key={bus._id} bus={bus} />
              ))
            ) : (
              <h4>No buses found...</h4>
            )}
          </div>
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
};

ViewCurBusesComp.propTypes = {
    buses: PropTypes.array.isRequired,
};

export default ViewCurBusesComp;
