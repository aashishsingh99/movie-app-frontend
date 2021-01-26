// import React, { Fragment, useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
// import { getAllBuses } from '../../actions/bus';
// import { register } from '../../actions/auth';
// import NotAuth  from '../../components/errors/NotAuth';
// import PropTypes from 'prop-types';


// const AllBuses = ({ getAllBuses ,role }) => {
//   if (role === 'user') {
//     return <NotAuth allowed='Admin' />;
//   } else {
//     return ;
//   }
// };

// AllBuses.propTypes = {
//     getAllBuses: PropTypes.func.isRequired,
// };
// const mapStateToProps = state => ({
//   role: state.auth.role,
  
// });
// export default connect(mapStateToProps, {getAllBuses})(AllBuses);
