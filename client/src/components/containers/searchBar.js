import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClaim } from '../../actions';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this)
}

  onInputChange(event) {
    //console.log(event.target.value);
    this.setState({ term: event.target.value });
  }
  onSubmitForm(event) {
    event.preventDefault();

    this.props.fetchClaim(this.state.term);
    this.setState({term: ''});
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="input-group">
        <input
          placeholder="Search"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchtoProp(dispatch) {
  return bindActionCreators({fetchClaim}, dispatch);
}
export default connect(null, mapDispatchtoProp)(SearchBar);