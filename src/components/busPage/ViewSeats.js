import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './bus.css';
import Modal from './Modal';

const ViewSeats = ({ bus, bookBus, role }) => {
  // Just for now show which are booked and which are not booked
  const busId = bus._id;
  const seats = bus.seats;
  const [modal, setModal] = useState({ isModalOpen: false, seatNumber: 0 });

  const toggleModal = () => {
    setModal({  isModalOpen: !modal.isModalOpen ,seatNumber:0});
  };

  const handleClickAvailable = seatNumber => {
    if (role === 'user') {
      // book the bus
      console.log('hi');
    setModal({  isModalOpen: !modal.isModalOpen,seatNumber: seatNumber });
      
    }
  };

  return (
    <div className='tableContainer'>
      {modal.isModalOpen && (
        <Modal
          onRequestClose={toggleModal}
          seatNumber={modal.seatNumber}
          bus={bus}
          bookBus={bookBus}
        />
      )}
      <h2> Hi </h2>
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
                  </td>
                );
              } else {
                return (
                  <td className='reserved'>
                    {role === 'admin' && seats[seatNumber].name}
                    <br />

                    {seatNumber}
                    <br />
                  </td>
                );
              }
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ViewSeats.propTypes = {};

export default ViewSeats;
