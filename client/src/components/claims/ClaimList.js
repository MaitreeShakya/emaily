import _ from "lodash";
import React from 'react';
import { Link } from 'react-router-dom'

const ClaimList = (props) => {
  console.log(props.claims);
  console.log("hello");
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
              onClick={() => this.onDeleteClick(claim._id)}
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
    )};

    export default ClaimList;


