import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClaimList from './claims/ClaimList';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ClaimList />
        <div className="fixed-action-btn">
          <Link to ="/claims/new"className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;