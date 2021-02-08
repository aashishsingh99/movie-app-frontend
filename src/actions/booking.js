import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';

// import { setAlert } from './alert';
import {
  BOOK_MOVIE,
  BOOK_MOVIE_ERROR,
  RESET_MOVIE,
  RESET_MOVIE_ERROR,
} from './types';



// Book the Bus
export const bookMovie = (seatNumber,movieId) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const body = { seatNumber: seatNumber,movieId:movieId };
    console.log(body)
    console.log('bookMovie action');
    const res = await axios.post('/api/movie/bookMovie',body,config);
    // const res = { data: 'hi' };
    console.log(res.data);
    await dispatch({
      type: BOOK_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BOOK_MOVIE_ERROR,
    });
  }
};
// Reset Bus
export const resetMovie = (movieId) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const body = {movieId:movieId };
      console.log(body)
      console.log('resetMovie action');
      const res = await axios.post('/api/movie/resetMovie',body,config);
      // const res = { data: 'hi' };
      console.log(res.data);
     dispatch({
        type: RESET_MOVIE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: RESET_MOVIE_ERROR,
      });
    }
  };
