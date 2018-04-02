import { FETCH_CLAIMS } from '../actions/types';

export default function (state = [], action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_CLAIMS:
      return action.payload;
    default:
      return state;
  }
}