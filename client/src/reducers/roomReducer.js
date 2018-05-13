import _ from 'lodash';
import { FETCH_ROOMS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ROOMS:
      return _.mapKeys(action.payload.data, '_id');
    default:
      return state;
  }
}