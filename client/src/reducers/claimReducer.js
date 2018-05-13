import _ from 'lodash';
import { FETCH_CLAIMS, FETCH_CLAIM, DELETE_CLAIM } from '../actions/types';

export default function (state = {}, action) {
  //console.log(action);
  switch (action.type) {
    case DELETE_CLAIM:
    return _.omit(state, action.payload);
    case FETCH_CLAIM:
      return {...state, [action.payload._id]: action.payload };
    case FETCH_CLAIMS:
      return _.mapKeys(action.payload.data, '_id');
    default:
      return state;
  }
}