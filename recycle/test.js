        <div className="card darken-1" key={claim._id}>
          <div className="card-content">
            <span className="card-title">{claim.address} </span>
            <p>
              {claim.body}
            </p>
            <p className="right">
              Created On: {new Date(claim.dateCreated).toLocaleDateString()}
            </p>
          </div>
        </div>