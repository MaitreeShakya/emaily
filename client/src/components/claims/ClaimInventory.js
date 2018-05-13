import React, { Component } from 'react';

export default class ClaimInventory extends Component {

  render() {
    return (
      <div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <h3 className="center">Inventory List</h3>
            <hr/>
            <table>
              <thead>
                <tr>
                  <th> ROOM </th>
                  <th> ITEM PHOTO </th>
                  <th> ITEM DESCRIPTION </th>
                  <th> BRAND </th>
                  <th> DISPOSITION </th>
                  <th> QTY </th>
                  <th> DATA TAG PHOTO</th>
                  <th> MODEL# </th>
                  <th> SERIAL# </th>
                  <th> RECEIPT PHOTO </th>
                  <th> LEFT OR TAKEN </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
