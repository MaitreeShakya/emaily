<div className="striped">
          <table>
            <thead>
              <tr>
                <th>Address</th>
                <th>Date Created</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{claim.address}</td>
                  <td>{new Date(claim.dateCreated).toLocaleDateString()}</td>
                </tr>
            </tbody>
          </table>
        </div>