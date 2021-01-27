import React from 'react';
import PropTypes from 'prop-types';
import './bus.css';

const ViewSeats = ({ seats,busId,bookBus }) => {
  // Just for now show which are booked and which are not booked

  const book = ({ seatNumber }) => {
    console.log('Book the bus', seatNumber);
    // action for booking the bus
    console.log(busId)
    bookBus(seatNumber,busId);
  };
  return (
    <div className='tableContainer'>
      <h2> Hi </h2>
      <table className='grid'>
        <tbody>
          <tr>
            {seats.map((seat, seatNumber) => {
                if(seat===null)
                {
                    return <td className='available' onClick={()=> book({ seatNumber })}> 
                    {seatNumber}
                    </td>
                }
                else{
                    return <td className='reserved' onClick={()=> console.log('already booked')}> 
                    {seatNumber}
                    </td>
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
