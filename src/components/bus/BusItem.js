import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import img from '../../img/black-white-bus.png'
const BusItem = ({ bus }) => {
  return (
    // <div className='profile bg-dark '>
    //   {/* <img src={'../../img/showcase.jpg'} alt='' className='round-img' /> */}
    //   <div>
    //     {' '}
    //     <h2>  {bus.name}</h2>{' '}
    //   </div>
    //   <div className='col-2'>
    //     Start Time - {bus.startTime}
    //     <br />
    //     Reach Time - {bus.reachTime}
    //     <br />
    //     Fare - {bus.fare}
    //   </div>
    //   <div className='col-4'>
    // <Link to={`/buses/${bus._id}`} className='btn btn-primary'>
    //   View Bus
    // </Link>
    //   </div>
    // </div>

    <Col l={4} m={6} s={12}>
      <Card
        actions={[
          <Link to={`/buses/${bus._id}`} className='btn btn-primary'>
            View Bus
          </Link>,
        ]}
        closeIcon={<Icon>close</Icon>}
        header={
          <CardTitle image={img} className='text-dark lead'> {bus.source}{' '}{bus.destination}<br/>{'Bus'}</CardTitle>
        }
        horizontal
        revealIcon={<Icon>more_vert</Icon>}
      >
        {bus.startTime}
        <br/>
        {bus.reachTime}
        <br/>
        {bus.date}
        <br/>
        {bus.fare}
      </Card>
    </Col>
  );
};

BusItem.propTypes = {
  bus: PropTypes.object.isRequired,
};

export default BusItem;
