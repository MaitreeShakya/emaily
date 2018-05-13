import React, { Component } from 'react';
import InventoryForm from './InventoryForm';
import { reduxForm } from 'redux-form';

class ItemNew extends Component {

  state = { showReviewForm: false };

  renderContent() {
    if (this.state.showReviewForm) {
      return <InventoryForm />
    }
    return <InventoryForm />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  };
}

export default reduxForm({
  form:'inventoryForm'
})(ItemNew);