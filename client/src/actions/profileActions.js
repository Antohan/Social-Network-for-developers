import axios from 'axios';

import * as actionTypes from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  axios
    .get('/api/profiel')
    .then(res => dispatch({
      type: actionTypes.GET_PROFILE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: actionTypes.GET_PROFILE,
      payload: {}
    }));
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
