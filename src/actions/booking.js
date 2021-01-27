import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';

// import { setAlert } from './alert';
import {
  BOOK_BUS,
  BOOK_BUS_ERROR,
  RESET_BUS,
  RESET_BUS_ERROR,
} from './types';



// Book the Bus
export const bookBus = (seatNumber,busId) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const body = { seatNumber: seatNumber,busId:busId };
    console.log(body)
    console.log('bookBus action');
    const res = await axios.post('/api/bus/bookBus',body,config);
    // const res = { data: 'hi' };
    console.log(res.data);
    await dispatch({
      type: BOOK_BUS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOK_BUS_ERROR,
    });
  }
};
// Reset Bus
export const resetBus = (busId) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const body = {busId:busId };
      console.log(body)
      console.log('resetBus action');
      const res = await axios.post('/api/bus/resetBus',body,config);
      // const res = { data: 'hi' };
      console.log(res.data);
     dispatch({
        type: RESET_BUS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: RESET_BUS_ERROR,
      });
    }
  };
