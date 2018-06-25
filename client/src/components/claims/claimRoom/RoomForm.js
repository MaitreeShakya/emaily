import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import RoomFormFields from './roomFormFields';
import RoomField from './RoomField';
import { Link } from 'react-router-dom';

class RoomForm extends Component {
  componentDidMount() {
    //console.log(this.props.id);
  }
  renderField() {
    return _.map(RoomFormFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={RoomField}
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
        <form onSubmit={this.props.handleSubmit(this.props.onRoomSubmit)} >
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
  _.each(RoomFormFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
}

// function mapStateToProps(state, ownProps) {
//   console.log(ownProps.id);
//   return {
//     initialValues: {
//       claimID: ownProps.id
//     }
//   }
// }

export default reduxForm({
  validate,
  form: 'roomForm',
  destroyOnUnmount: false,
})(RoomForm);
