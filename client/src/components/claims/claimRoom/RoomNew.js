import React, { Component } from 'react';
import RoomForm from './RoomForm';
import { reduxForm } from 'redux-form';
import RoomFormReview from './RoomFormReview';

class RoomNew extends Component {
  state = { showFormReview: false, id:"" };

  componentWillMount() {
    const { id } = this.props.match.params;
    this.setState({id});
    //console.log(id);
  }

  renderContent() {
    if (this.state.showFormReview) {
      return < RoomFormReview id={this.state.id}
        onCancel={() => this.setState({ showFormReview: false })}
      />
    }
    return <RoomForm id={this.state.id} onRoomSubmit={() => this.setState({ showFormReview: true })} />
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