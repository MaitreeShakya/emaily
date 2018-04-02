import axios from 'axios';

import { FETCH_USER, FETCH_CLAIMS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitClaim = (values, history) => async dispatch => {
  const res = await axios.post('/api/claims', values);
  console.log(history);
  //console.log("abc");
  history.push('/claims');
  dispatch({ type: FETCH_USER, payload: res.data })
  //return { type: 'submit_survey' };
};

export const fetchClaim = () => async dispatch => {
  const res = await axios.get('/api/claims');

  dispatch({ type: FETCH_CLAIMS, payload: res.data });
};