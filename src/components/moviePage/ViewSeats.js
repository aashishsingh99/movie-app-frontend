import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './bus.css';
import ModalBooking from './ModalBooking';
import ModalAdmin from './ModalAdmin'
import {Col,Icon} from 'react-materialize'
const ViewSeats = ({ movie, bookMovie, role }) => {
  // Just for now show which are booked and which are not booked
  const movieId = movie._id;
  const seats = movie.seats;
  const [modal, setModal] = useState({ isModalOpen: false, seatNumber: 0 });

  const toggleModal = () => {
    setModal({  isModalOpen: !modal.isModalOpen ,seatNumber:0});
  };

  const handleClickAvailable = seatNumber => {
    if (role === 'user') {
      // book the movie
      console.log('hi');
    setModal({  isModalOpen: !modal.isModalOpen,seatNumber: seatNumber });
      
    }
  };
  const handleClickReserved = seatNumber => {
    if (role === 'admin') {
     
    setModal({  isModalOpen: !modal.isModalOpen,seatNumber: seatNumber });
      
    }
  };

  return (
    <Fragment>
      <div className="card horizantal busPage">
       
    <h1 className='busName' >  <Icon> directions_bus
</Icon><span>{"  "}</span>{movie.name} </h1>
    </div>
    <div className='tableContainer'>
      {modal.isModalOpen && role==='user' && (
        <ModalBooking
          onRequestClose={toggleModal}
          seatNumber={modal.seatNumber}
          movie={movie}
          bookMovie={bookMovie}
        />
      )}
      {modal.isModalOpen && role==='admin' && (
        <ModalAdmin
          onRequestClose={toggleModal}
          seatNumber={modal.seatNumber}
          movie={movie}
          details={seats[modal.seatNumber]}
        />
      )}
      <table className='grid'>
        <tbody>
          <tr>
            {seats.map((seat, seatNumber) => {
              if (seat === null) {
                return (
                  <td
                    className='available'
                    onClick={() => handleClickAvailable(seatNumber)}
                  >
                    {seatNumber}
                     <br />
                  <Icon> event_seat</Icon>
                    
                   
                  </td>
                );
              } else {
                return (
                  <td className='reserved'
                  onClick={() => handleClickReserved(seatNumber)}
                  >
                    {seatNumber}
                    <br />
                  <Icon> event_seat</Icon>
                  </td>
                );
              }
            })}
          </tr>
        </tbody>
      </table>
    </div>
    </Fragment>
  );
};

ViewSeats.propTypes = {};

export default ViewSeats;
