import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'react-materialize';
const FindMovie = ({ formData, onChange, onSubmit }) => {
  const { name, date } = formData;

  return (
    <Fragment>
      <div className='form-border center_card'>

        <form onSubmit={onSubmit}>
          <div className='center-align'>
            <Row className='center-align'>
              <Col l={1}></Col>
              <Col l={2}>
                <div className='form-group'>
                  <input
                    className='center-align'
                    type='text'
                    placeholder='Movie Name'
                    name='name'
                    value={name}
                    onChange={onChange}
                  />
                </div>
              </Col>
              
              <Col l={1}>
                <Icon>date_range</Icon>
              </Col>
              <Col l={2}>
                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Date'
                    name='date'
                  
                    onChange={onChange}
                  />
                </div>
              </Col>
              <Col l={2}>
          <input style={{"border-radius":"10%"}} type='submit' className='btn btn-primary' value='Find' />

              </Col>
            </Row>
          </div>

        </form>
      </div>
    </Fragment>
  );
};

FindMovie.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FindMovie;
