import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import claimReducer from './claimReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  claim: claimReducer
});