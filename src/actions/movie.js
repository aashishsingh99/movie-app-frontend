import axios from 'axios';
import {
  FIND_MOVIE,
  FIND_MOVIE_ERROR,
  ADD_MOVIE,
  ADD_MOVIE_ERROR,
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_ERROR,
  GET_MOVIE_BY_ID,
  GET_MOVIE_BY_ID_ERROR,
} from './types';

// find bus
export const findMovie = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    console.log('findMovie action',formData.date);
    const res = await axios.post('api/movie/findMovie', formData, config);
    // const res = { data: 'hi' };

    dispatch({
      type: FIND_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FIND_MOVIE_ERROR,
    });
  }
};
// add bus
export const addMovie = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // const name = formData.source + ' ' + formData.destination + ' ' + 'Bus';
  // formData.name = name;
  console.log(formData.date)
  const newDate=(formData.date).toString();
  formData.date=newDate;
  console.log(newDate)
  try {
    //console.log(formData)
    const res = await axios.post('api/movie/addMovie', formData, config);
    // const res = { data: 'hi' };

    dispatch({
      type: ADD_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_MOVIE_ERROR,
    });
  }
};
// GET ALL BUSES
export const getAllMovies = () => async dispatch => {
  try {
    console.log('getAll movies action');
    const res = await axios.get('api/movie/getAllMovies');
    // const res = { data: 'hi' };
    console.log(res.data);
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_MOVIES_ERROR,
    });
  }
};

// GET Bus by Id
export const getMovieById = (id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const body = { id: id };
    console.log(body)
    console.log('getMovieById action');
    const res = await axios.get(`/api/movie/getMovieById/${id}`);
    // const res = { data: 'hi' };
    console.log(res.data);
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_MOVIE_BY_ID_ERROR,
    });
  }
};
