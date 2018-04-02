//ClaimForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ClaimField from './ClaimField';
import { Link } from 'react-router-dom';
import formFields from './formFields';

class ClaimForm extends Component {
  renderField() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ClaimField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onClaimSubmit)}>
          {this.renderField()}
          <Link to='/claims' className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'claimForm',
  destroyOnUnmount: false,
})(ClaimForm);