import _ from "lodash";
import React from 'react';
import * as actions from '../../actions'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

const ClaimList = (props, history) => {

  const onDeleteClick = (id) => {
    console.log(id);
    // this.deleteClaim(id, () => {
    //   this.props.history.push('/');
    // });
  }

  const renderClaims = _.map(props.claims, claim => {
    return (
      <tr key={claim._id}>
        <td><Link to={`/claims/${claim._id}`}>{claim._id}</Link></td>
        <td>{claim.address}</td>
        <td>{new Date(claim.dateCreated).toLocaleDateString()}</td>
        <td>
          <i style={{ cursor: 'pointer' }}
            className="material-icons"
            onClick={() => this.onEditClick(claim.address)}
          >
            edit
              </i>
          <i style={{ cursor: 'pointer' }}
            className="material-icons"
            onClick={() => onDeleteClick(claim._id)}
          >
            delete
              </i>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table className="striped">
        <thead>
          <tr>
            <th>ClaimID</th>
            <th>Claim Address</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderClaims}
        </tbody>
      </table>
    </div>
  )
};

function mapStateToProps({ claim }) {
  return ({ claim });
}

export default connect(mapStateToProps, actions)(withRouter(ClaimList));


