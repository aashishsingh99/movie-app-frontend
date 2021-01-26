import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';

// import { setAlert } from './alert';
import {
  FIND_BUS,
  FIND_BUS_ERROR,
  ADD_BUS,
  ADD_BUS_ERROR,
  GET_ALL_BUSES,
  GET_ALL_BUSES_ERROR,
} from './types';

// find bus
export const findBus = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    console.log('findBus action')
    const res = await axios.post('api/bus/findBus', formData, config);
    // const res = { data: 'hi' };

    dispatch({
      type: FIND_BUS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FIND_BUS_ERROR,
    });
  }
};
// add bus
export const addBus = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const name=formData.source+' '+formData.destination+' '+'Bus';
  formData.name=name;
  try {
    //console.log(formData)
    const res = await axios.post('api/bus/addBus', formData, config);
    // const res = { data: 'hi' };

    dispatch({
      type: ADD_BUS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_BUS_ERROR,
    });
  }
};
// GET ALL BUSES
export const getAllBuses = () => async dispatch => {
  
  try {
    console.log('getAll buses action')
    const res = await axios.get('api/bus/getAllBuses');
    // const res = { data: 'hi' };
    console.log(res.data);
    dispatch({
      type: GET_ALL_BUSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_BUSES_ERROR,
    });
  }
};
