import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import claimReducer from './claimReducer';
import searchReducer from './authReducer';
import roomReducer from './roomReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  claim: claimReducer,
  search: searchReducer,
  room: roomReducer
});