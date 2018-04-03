import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClaim } from '../../actions';
import SearchBar from '../containers/searchBar';
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
          <td>{new Date(claim.dateCreated).toLocaleDateString()}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <SearchBar/>
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