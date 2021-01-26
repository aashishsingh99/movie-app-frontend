import React from 'react';
import PropTypes from 'prop-types';

const NotAuth = ({ allowed }) => {
  return <div>You are not allowed here <br/>Please Don't come here again<br/>Only a {allowed} is allowed here</div>;
};

NotAuth.propTypes = {
    auth: PropTypes.string.isRequired,
};

export default NotAuth;
