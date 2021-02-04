import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from "react-materialize";
const Date = ({date,onChangeDate}) => {
  return (
    <div>
   <DatePicker
          onChange={({ target: { value: date } }) => {
            
          }}
        />
    </div>
  );
};

Date.propTypes = {};

export default Date;
