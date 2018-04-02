import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClaim } from '../../actions';

class ClaimList extends Component {
  componentDidMount() {
    this.props.fetchClaim();
  }
  renderClaims() {
    return this.props.claim.reverse().map(claim => {
      return (
        <tr key={claim._id}>
          <td>{claim._id}</td>
          <td>{claim.address}</td>
          <td>{new Date(claim.dateCreated).toLocaleTimeString()}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <div>
          <table className="striped">
            <thead>
              <tr>
                <th>ClaimID</th>
                <th>Claim Address</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {this.renderClaims()}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

function mapStateToProps({ claim }) {
  return { claim };
}

export default connect(mapStateToProps, { fetchClaim })(ClaimList);