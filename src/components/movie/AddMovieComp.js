// import React, { Fragment } from 'react';
// import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { Row, Col, Icon } from 'react-materialize';
// import Date from '../utils/Date';

// const AddMovie = ({ formData, onChange, onChangeDate, onSubmit }) => {
//   const { name, startTime, reachTime, date, fare } = formData;

//   return (
//     <Fragment>
//       <center>
//         <div className='card-panel3'>
//           <h3 className='large text-primary'>Add Movie</h3>

//           <form className='form center-align' onSubmit={onSubmit}>
//             <center>
//               {/* <Row>
//                 <Col l={1}></Col>
                

                
//               </Row> */}
//               <Row className='center-align'>
//               <Col l={1}></Col>
//               <Col>
//                   <div className='form-group'>
//                     <Icon> movie</Icon>
//                     <input
//                       type='text'
//                       placeholder='Movie Name'
//                       name='name'
//                       value={name}
//                       onChange={onChange}
//                     />
//                   </div>
//                 </Col>
//                 <Col>
//                   <div className='form-group'>
//                     <Icon> movie</Icon>
//                     <input
//                       type='text'
//                       placeholder='Movie Name'
//                       name='name'
//                       value={name}
//                       onChange={onChange}
//                     />
//                   </div>
//                 </Col>
//               </Row>
//               <Row className='center-align'>
//                 {/* <Col l={1}></Col>
//                 <Col>
//                   <div className='form-group'>
//                     <Icon> movie</Icon>
//                     <input
//                       type='text'
//                       placeholder='Movie Name'
//                       name='name'
//                       value={name}
//                       onChange={onChange}
//                     />
//                   </div>
//                 </Col> */}
//                 <Col>
//                   <div className='form-group'>
//                     <Icon> timer</Icon>
//                     <input
//                       type='text'
//                       placeholder='Movie Start Time'
//                       name='startTime'
//                       value={startTime}
//                       onChange={onChange}
//                     />
//                   </div>
//                 </Col>
//                 <Col>
//                   <div className='form-group'>
//                     <Icon> timer_off</Icon>
//                     <input
//                       type='text'
//                       placeholder='Movie End Time'
//                       name='reachTime'
//                       value={reachTime}
//                       onChange={onChange}
//                     />
//                   </div>
//                 </Col>
//               </Row>
//               <div className='form-group'>
//                 <Icon> date_range</Icon>
//                 <input
//                   type='date'
//                   placeholder='date'
//                   name='date'
//                   value={date}
//                   onChange={onChange}
//                 />
//               </div>
//               <div className='form-group'>
//                 <Icon> attach_money</Icon>
//                 <input
//                   type='text'
//                   placeholder='Price per ticket'
//                   name='fare'
//                   value={fare}
//                   onChange={onChange}
//                 />
//               </div>
//               <input type='submit' className='btn btn-primary' value='AddMovie' />
//             </center>
//           </form>
//         </div>
//       </center>
//     </Fragment>
//   );
// };

// AddMovie.propTypes = {
//   formData: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };

// export default AddMovie;

import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'react-materialize';
import Date from '../utils/Date';

const AddMovie = ({ formData, onChange, onChangeDate, onSubmit }) => {
  const { name, startTime, reachTime, date, fare } = formData;

  return (
    <Fragment>
      <center>
        <div className='card-panel3'>
          <h3 className='large text-primary'>Add Movie</h3>

          <form className='form center-align' onSubmit={onSubmit}>
            <center>
              {/* <Row>
                <Col l={1}></Col>
                

                
              </Row> */}
              <Row className='center-align'>
              <Col l={1}></Col>
              <Col>
                  <div className='form-group'>
                    <Icon> movie</Icon>
                    <input
                      type='text'
                      placeholder='Movie Name'
                      name='name'
                      value={name}
                      onChange={onChange}
                    />
                  </div>
                </Col>
                <Col>
                  <div className='form-group'>
                    <Icon> movie</Icon>
                    <input
                      type='text'
                      placeholder='Movie Name'
                      name='name'
                      value={name}
                      onChange={onChange}
                    />
                  </div>
                </Col>
              </Row>
              <Row className='center-align'>
                {/* <Col l={1}></Col>
                <Col>
                  <div className='form-group'>
                    <Icon> movie</Icon>
                    <input
                      type='text'
                      placeholder='Movie Name'
                      name='name'
                      value={name}
                      onChange={onChange}
                    />
                  </div>
                </Col> */}
                <Col>
                  <div className='form-group'>
                    <Icon> timer</Icon>
                    <input
                      type='text'
                      placeholder='Movie Start Time'
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
                      placeholder='Movie End Time'
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
                  placeholder='Price per ticket'
                  name='fare'
                  value={fare}
                  onChange={onChange}
                />
              </div>
              <input type='submit' className='btn btn-primary' value='AddMovie' />
            </center>
          </form>
        </div>
      </center>
    </Fragment>
  );
};

AddMovie.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddMovie;
