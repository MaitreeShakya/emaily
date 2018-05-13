import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClaimList from './claims/ClaimList';
import { fetchClaims } from '../actions';
import { connect } from 'react-redux';

class Dashboard extends Component {

  componentWillMount() {
    //console.log('hello from component');
    this.props.fetchClaims();
    console.log(this.claim);
    console.log("from dashboard")
  }
  render() {
    return (
      <div>
        <ClaimList claims={this.claim} />
        <div className="fixed-action-btn">
          <Link to="/claims/new" className="btn-floating btn-large waves-effect waves-light red">
            <i title="Add Claim" className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ claim }) {
  return { claim };
}

export default connect(mapStateToProps, { fetchClaims })(Dashboard);