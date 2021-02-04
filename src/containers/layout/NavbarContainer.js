import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-materialize/lib/Icon';

const NavbarComponent = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <div>
        <Link to='/register'>Register</Link>
    
        <Link to='/login'>Login</Link>
     </div>
  );
  const UserLinks = (
    
        <a onClick={logout} href='#!'>
       
          <span className='hide-sm'>Logout</span>
        </a>
    
  );
  return (
    <nav className='navbar bg-primary' id="nav-head">
      
        <Link to='/'>
          Home
        </Link>
        
         <div className="busName"> Bus Booking </div>
      
     
      {!loading && (
        <Fragment>{isAuthenticated ? UserLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};
NavbarComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(NavbarComponent);
