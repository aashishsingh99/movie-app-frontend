import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const AddBus = ({  formData,onChange,onSubmit }) => {
  
  const { source,destination,startTime,reachTime,date,fare} = formData;
   
 

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
              placeholder='Start Time'
              name='startTime'
              value={startTime}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Reach Time'
              name='reachTime'
              value={reachTime}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='date'
              placeholder='DD/MM/YYYY'
              name='date'
              value={date}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              placeholder='Price per seat'
              name='fare'
              value={fare}
              onChange={onChange}
            />
          </div>
          <input type='submit' className='btn btn-primary' value='AddBus' />
        </form>
      </div>
    </Fragment>
  );
};

AddBus.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

};

export default AddBus;
