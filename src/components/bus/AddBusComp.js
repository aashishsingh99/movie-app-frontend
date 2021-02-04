import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'react-materialize';
import Date from '../utils/Date';

const AddBus = ({ formData, onChange, onChangeDate, onSubmit }) => {
  const { source, destination, startTime, reachTime, date, fare } = formData;

  return (
    <Fragment>
      <center>
        <div className='card-panel3'>
          <h1 className='large text-primary'>Add Bus</h1>

          <form className='form center-align' onSubmit={onSubmit}>
            <center>
              <Row>
                <Col l={1}></Col>
                <Col>
                  <div className='form-group'>
                    <Icon> location_on </Icon>
                    <input
                      type='text'
                      placeholder='Source'
                      name='source'
                      value={source}
                      onChange={onChange}
                    />
                  </div>
                </Col>

                <Col>
                  <div className='form-group'>
                    <Icon> location_on </Icon>

                    <input
                      type='text'
                      placeholder='Destination'
                      name='destination'
                      value={destination}
                      onChange={onChange}
                    />
                  </div>
                </Col>
              </Row>
              <Row className='center-align'>
                <Col l={1}></Col>
                <Col>
                  <div className='form-group'>
                    <Icon> timer</Icon>
                    <input
                      type='text'
                      placeholder='Start Time'
                      name='startTime'
                      value={startTime}
                      onChange={onChange}
                    />
                  </div>
                </Col>
                <Col>
                  <div className='form-group'>
                    <Icon> timer_off</Icon>
                    <input
                      type='text'
                      placeholder='Reach Time'
                      name='reachTime'
                      value={reachTime}
                      onChange={onChange}
                    />
                  </div>
                </Col>
              </Row>
              <div className='form-group'>
                <Icon> date_range</Icon>
                <input
                  type='date'
                  placeholder='date'
                  name='date'
                  value={date}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <Icon> attach_money</Icon>
                <input
                  type='text'
                  placeholder='Price per seat'
                  name='fare'
                  value={fare}
                  onChange={onChange}
                />
              </div>
              <input type='submit' className='btn btn-primary' value='AddBus' />
            </center>
          </form>
        </div>
      </center>
    </Fragment>
  );
};

AddBus.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddBus;
