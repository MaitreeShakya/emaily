import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClaim } from '../actions';
import { Link } from 'react-router-dom';

import ClaimInventory from './claims/ClaimInventory';
import RoomList from './claims/claimRoom/RoomList';

class SpreadSheet extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchClaim(id);
  }
  render() {
    const { claim } = this.props;

    if (!claim) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title center" >Claim Detail</span>
            <hr /><br />
            <span>Claim ID: {claim._id}</span>
            <span className="right">Date Created: {new Date(claim.dateCreated).toLocaleDateString()}</span>
            <p>Address: {claim.address}</p>
          </div>
        </div>
        <div>
          <Link to={`/claims/${this.props.match.params.id}/inventory/new`}>
            <button className="right" title="New Inventory Item">ADD ITEM</button>
          </Link>
          <br />
        </div>
          <br/>
        <div className="card darken-2">
          <ClaimInventory />
        </div>
        <div>
          <Link to={`/claims/${this.props.match.params.id}/claimRoom/new`}>
            <button className="right">
              ADD ROOM
          </button>
          </Link>
          <br/>
        </div>
        <br />
        <div className="card darken-2">
          <RoomList />
        </div>
      </div >

    );
  }
}

function mapStateToProps({ claim }, ownProps) {
  return { claim: claim[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchClaim })(SpreadSheet);