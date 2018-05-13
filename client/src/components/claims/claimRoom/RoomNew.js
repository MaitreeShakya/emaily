import React, { Component } from 'react';
import RoomForm from './RoomForm';
import { reduxForm } from 'redux-form';
import RoomFormReview from './RoomFormReview';

class RoomNew extends Component {
  state = { showFormReview: false };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
  }

  renderContent() {
    if (this.state.showFormReview) {
      return < RoomFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />
    }
    return <RoomForm id={this.id} onRoomSubmit={() => this.setState({ showFormReview: true })} />
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
  form: 'roomForm'
})(RoomNew);