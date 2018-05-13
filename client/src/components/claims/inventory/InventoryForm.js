import React, { Component } from 'react';
import _ from 'lodash';
import { Field } from 'redux-form';
import inventoryFormFields from './inventoryFormFields';
import InventoryField from './InventoryField';
import { Link } from 'react-router-dom';

export default class InventoryForm extends Component {

  renderField() {
    return _.map(inventoryFormFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={InventoryField}
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
        <form action="">
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
    )
  };
}