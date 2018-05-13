import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import claimNew from './claims/ClaimNew'
import SpreadSheet from './SpreadSheet';
import RoomNew from './claims/claimRoom/RoomNew';
import ItemNew from './claims/inventory/ItemNew';
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
            <br />
            <Route exact path="/" component={Landing} />
            <Route exact path="/claims" component={Dashboard} />
            <Route path="/claims/new" component={claimNew} />
            <Route exact path="/claims/:id" component={SpreadSheet} />
            <Route path="/claims/:id/claimRoom/new" component={RoomNew} />
            <Route path="/claims/:id/inventory/new" component={ItemNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(app);