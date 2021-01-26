import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const FindBus = ({  formData,onChange,onSubmit }) => {
  
    const { source,destination,date} = formData;

 

  return (
    <Fragment>
      <div className='form-border'>
        <h1 className='large text-primary'>Find Bus</h1>

        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Source'
              name='source'
              value={source}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Destination'
              name='destination'
              value={destination}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Date'
              name='date'
              value={date}
              onChange={onChange}
            />
          </div>
          <input type='submit' className='btn btn-primary' value='FindBus' />
        </form>
      </div>
    </Fragment>
  );
};

FindBus.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

};

export default FindBus;
