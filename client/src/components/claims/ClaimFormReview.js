import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const ClaimFormReveiew = ({ onCancel, formValues, submitClaim, history }) => {
    //console.log(history);
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });
  return (
    <div>
      <h5> Please confirm your entries </h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
        </button>
      <Link to='/claims'
        onClick={() => submitClaim(formValues, history) && alert("Your query has been saved")}
        className="green btn-flat right white-text">
        Submit
          <i className="material-icons right">save</i>
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  //console.log(state);
  return { formValues: state.form.claimForm.values };

}

export default connect(mapStateToProps, actions)(withRouter(ClaimFormReveiew));