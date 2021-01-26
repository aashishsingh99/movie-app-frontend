// import api from '../utils/api';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from './types';

// Load User
export const loadUser = () => async dispatch => {
  try {
      if(localStorage.token){
          setAuthToken(localStorage.token)
      }
     const res = await axios.get('/api/auth');
    // const res = { data: 'hi' };
   console.log('load_user() hii ', res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log('Load_use()', err);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // const body = JSON.stringify({name,email,password,role})
  // console.log(body.name)
  try {
    // const res = await api.post('/users', formData);
    //const res1 = await api.post('/profile', profileData);
    const res = await axios.post('/api/users', formData, config);
    // const res={data:'hi'}
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (body) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  

  try {
    // const res = await api.post('/auth', body);
    console.log('hi')
    const res = await axios.post('/api/auth', body, config);

    // const res={data:'hi'}
    //console.log(res.data)
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

   await dispatch(loadUser());
  } catch (err) {
    console.log(err);
   
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: CLEAR_PROFILE, type: LOGOUT });
