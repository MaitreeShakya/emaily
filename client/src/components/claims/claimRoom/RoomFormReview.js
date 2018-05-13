import React from 'react';
import roomFormFields from './roomFormFields';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../../../actions';

const RoomFormReview = ({ onCancel, formValues, submitRoom, history }) => {

  const reviewFields = _.map(roomFormFields, ({ name, label }) => {
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
        onClick={() => submitRoom(formValues, history) && alert("Your query has been saved")}
        className="green btn-flat right white-text">
        Submit
          <i className="material-icons right">save</i>
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return { formValues: state.form.roomForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(RoomFormReview));