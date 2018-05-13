import React, { Component } from 'react';
import { fetchRooms } from '../../../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class RoomList extends Component {

  componentDidMount() {
    this.props.fetchRooms();
  }

  onDeleteClick(id) {
    console.log(id);
  }

  renderList() {
    return _.map(this.props.room, room => {
      return (
        <div key={room._id}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <div>
                <span>{room.roomName}</span>
                <span className="right" style={{ marginLeft: '10px' }}>  <i title="Add Photo" style={{ cursor: "pointer" }} className="small material-icons ">add_a_photo</i></span>
                <span className="btn-small right blue-text" style={{ marginLeft: '10px' }}>
                  <button  onClick={() => this.onDeleteClick(room._id)}>
                    Delete Room
                    </button>
                </span>
                <span className="btn-small right blue-text" style={{ marginLeft: '10px' }}>
                  <button>
                    Edit Room
                    </button>
                </span>
                <br /><br /><hr />
              </div>
            </div>
          </div>
        </div>

      );
    });
  }
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  };
}

function mapStateToProps({ room }) {
  return { room };
}

export default connect(mapStateToProps, { fetchRooms })(RoomList);