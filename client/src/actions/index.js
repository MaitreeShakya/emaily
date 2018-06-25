import axios from 'axios';

import { FETCH_USER, FETCH_CLAIMS, FETCH_CLAIM, DELETE_CLAIM, FETCH_ROOMS, GET_URL } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`/api/current_user`);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitClaim = (values, history) => async dispatch => {
  const res = await axios.post(`/api/claims`, values);
  //console.log(history);
  history.push('/claims');
  dispatch({ type: FETCH_USER, payload: res.data })
  //return { type: 'submit_survey' };
};

export const fetchClaims = () => async dispatch => {
  const res = await axios.get(`/api/claims`);
  //console.log(res.data);
  dispatch({ type: FETCH_CLAIMS, payload: res });
};

export const fetchClaim = (id) => async dispatch => {
  const res = await axios.get(`/api/claims/${id}`);
  dispatch({ type: FETCH_CLAIM, payload: res });
};

export const deleteClaim = (id, callback) => async dispatch => {
  await axios.delete(`/api/claims/${id}`).then(() => callback());
  dispatch({ type: DELETE_CLAIM, payload: id });
}

//Room action creators
export const submitRoom = (values, history) => async dispatch => {
  await axios.post(`/api/rooms`, values);
}

export const fetchRooms = () => async dispatch => {
  const res = await axios.get('/api/rooms');
  dispatch({ type: FETCH_ROOMS, payload: res });
}

export const getURL = (file) => async dispatch => {
 const uploadConfig = await axios.get('/api/upload');

  const upload = await axios.put(uploadConfig.data.url, file, {
    headers: {
      'Content-Type': file.type
    }
  });
}