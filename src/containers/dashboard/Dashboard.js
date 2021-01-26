import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getAllBuses } from '../../actions/bus';

import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Dashboard = ({ auth: { role, user }, getAllBuses}) => {
  const [redirect, setRedirect] = useState({
    redirectToNewPage: false,
  });

  if (redirect.redirectToNewPage) {
    return <Redirect to='/buses' />;
  }
 const click=()=>{
   getAllBuses();
   setRedirect({ ...redirect, redirectToNewPage: true });
  
 }
  if (role === 'user') {
    return (
      <Fragment>
        <div> Hi </div>
        <div>
          <Link to='/findBus'>
            <button className='btn btn-primary'> Find Bus </button>
          </Link>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        Hi (admin)
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
        </div>
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
});
export default connect(mapStateToProps, {getAllBuses})(Dashboard);
