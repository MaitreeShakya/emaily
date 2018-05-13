import { SEARCH_CLAIM } from '../actions/types';

export default function (state = [], action) {
  //console.log(action);
  switch (action.type) {
    case SEARCH_CLAIM:
      return action.payload;
    default:
      return state;
  }
}