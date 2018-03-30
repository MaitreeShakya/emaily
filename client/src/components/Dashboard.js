import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to DSA Dashboard</h2>
        <div className="fixed-action-btn">
          <Link to ="/claims/new"class="btn-floating btn-large waves-effect waves-light red">
            <i class="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;