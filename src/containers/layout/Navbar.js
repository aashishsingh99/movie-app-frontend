import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <ul>
     
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  const UserLinks = (
    <ul>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          {'  '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark' id="nav-head">
      <h1>
        <Link to='/'>
          <i></i> Bus Booking
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? UserLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
