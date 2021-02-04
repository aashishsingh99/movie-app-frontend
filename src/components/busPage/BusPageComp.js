import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Row,Col} from 'react-materialize'
import ViewSeats from './ViewSeats';
import BusPageNav from './BusPageNav'
import './bus.css';
const BusPageComp = ({ bus, auth: { role, user }, bookBus, resetBus }) => {
  
  return (
    <Fragment >
      
      {bus === null ? (
        <h4> Loading... </h4>
      ) : (
        <Fragment>
          
        <div className="busPageContainer">
          <Row>
            <Col l={4}>
          <ViewSeats bus={bus} bookBus={bookBus} role={role}/>
          </Col>
          <Col l={8}>
          <BusPageNav id={user._id}seats={bus.seats} bus={bus}role={role} resetBus={resetBus} /> 
          </Col>
          </Row>
          </div>
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
