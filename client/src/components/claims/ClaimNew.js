//Survey new shows surveyForm and surveyReview
import React, { Component } from 'react';
import { reduxForm} from 'redux-form';
import ClaimForm from './ClaimForm';
import ClaimFormReview from './ClaimFormReview';

class ClaimNew extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = { new: true };
  // }
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <ClaimFormReview
        onCancel={()=> this.setState({ showFormReview: false})}
      />
    }

    return <ClaimForm onClaimSubmit={() => this.setState({ showFormReview: true })} />
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'claimForm'
}) (ClaimNew);
