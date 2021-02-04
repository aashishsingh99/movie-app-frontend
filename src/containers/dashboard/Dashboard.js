import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getAllBuses } from '../../actions/bus';
import { Row, Col, Card, Icon, Carousel, Button } from 'react-materialize';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import InlineFindForm from './InlineFindForm';
import FindBus from '../../containers/bus/FindBus';
const Dashboard = ({ auth: { role, user }, getAllBuses, bus: { buses } }) => {
  useEffect(() => {
    getAllBuses();
  }, []);
  const [redirect, setRedirect] = useState({
    redirectToNewPage: false,
  });

  if (redirect.redirectToNewPage) {
    return <Redirect to='/buses' />;
  }
  const click = () => {
    setRedirect({ ...redirect, redirectToNewPage: true });
  };
  if (role === 'user') {
    return (
      <Fragment>
        <div>
          <FindBus></FindBus>
        </div>
        {buses.length > 0 && (
          <div>
            <h2 className='banner'> Feautred Buses</h2>
            <Carousel
              carouselId='Carousel-2'
              options={{
                dist: -100,
                duration: 200,
                fullWidth: true,
                indicators: true,
                noWrap: true,
                numVisible: 5,
                onCycleTo: null,
                padding: 30,
                shift: 10,
              }}
              center
            >
              <div className='myDiv center-align card-panel hoverable'>
                <div className='bg2 '></div>
                <div className=' carasouel-container'>
                  <h3>{buses[0].name}</h3>
                  <Link to={`/buses/${buses[0]._id}`}>
                    <Button> View Bus</Button>
                  </Link>
                </div>
              </div>
              <div className='myDiv card-panel hoverable'>
                <div className='bg2'></div>
                <div className='carasouel-container '>
                  <h3>{buses[1].name}</h3>
                  <Link to={`/buses/${buses[1]._id}`}>
                    <Button> View Bus</Button>
                  </Link>
                </div>
              </div>
              <div className='myDiv card-panel hoverable'>
                <div className='bg2'></div>
                <div className='carasouel-container'>
                  <div>
                    <h3>{buses[2].name}</h3>
                  </div>
                  <Link to={`/buses/${buses[2]._id}`}>
                    <Button> View Bus</Button>
                  </Link>
                </div>
              </div>
            </Carousel>
          </div>
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Row>
          <Col l={4}></Col>
          <Col l={4} m={6} s={12} className='center_card'>
            <Card
              actions={[
                <Link className='adminLinks' to='/buses'>
                  Your Fleet
                </Link>,
                <Link className='adminLinks' to='/addBus'>
                  Add a Bus
                </Link>,
              ]}
              className='white darken-4'
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName='black-text'
              
            >
              <center>
               <h1 className="busName"> <Icon>person_pin</Icon>Admin</h1>
              <br/>
              Total Buses - {buses.length}
              <br/>
              Total Bookings - {"7"}
              </center>
            </Card>
          </Col>
        </Row>
        {/* 
        <div>
          <Link to='/buses'>
            <button className='btn btn-primary' onClick={click}>
              {' '}
              View All Buses{' '}
            </button>
          </Link>

          <Link to='/addBus'>
            <button className='btn btn-primary'> Add Bus </button>
          </Link>
        </div> */}
      </Fragment>
    );
  }
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllBuses: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  bus: state.bus,
});
export default connect(mapStateToProps, { getAllBuses })(Dashboard);
