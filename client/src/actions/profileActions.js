import axios from 'axios';

import * as actionTypes from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  axios
    .get('/api/profile')
    .then(res => dispatch({
      type: actionTypes.GET_PROFILE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: actionTypes.GET_PROFILE,
      payload: {}
    }));
};

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err => dispatch({
      type: actionTypes.GET_ERRORS,
      payload: err.response.data
    }));
};

// Delete accout & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can be undone!')) {
    axios
      .delete('/api/profile')
      .then(res => dispatch({
        type: actionTypes.SET_CURRENT_USER,
        payload: {}
      }))
      .catch(err => dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      }));
  }
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: actionTypes.PROFILE_LOADING
  }
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: actionTypes.CLEAR_CURRENT_PROFILE
  }
};
