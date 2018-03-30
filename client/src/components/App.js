import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import claimNew from './claims/ClaimNew'

//const Dashboard = () => <h2>Dashboard</h2>
//const SurveyNew = () => <h2>SurveyNew</h2>

class app extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <p></p>
            <Route exact path="/" component={Landing} />
            <Route exact path="/claims" component={Dashboard} />
            <Route path="/claims/new" component={claimNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(app);