import React, { Component } from 'react';
// import { fetchRooms, getURL } from '../../../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../../actions';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
  }

  componentDidMount() {
    this.props.fetchRooms();
  }

  onDeleteClick(id) {
    console.log(id);
  }
  onFileChange(event) {
     //console.log(event.target.files);
    // this.setState({ file: event.target.files[0] });
    // console.log(this.state.file);
    const image = event.target.files;
    //console.log(image.type);
     this.props.getURL(event.target.files);
  }
  renderList() {
    return _.map(this.props.room, room => {
      return (
        <div key={room._id}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <div>
                <span>{room.roomName}</span>
              </div>
              <div>
                <label>
                  <span
                    className="right"
                    style={{ marginLeft: '10px' }}>
                    <i
                      title="Add Photo"
                      style={{ cursor: "pointer" }}
                      className="small material-icons ">
                      add_a_photo
                  </i>
                  </span>
                  <input
                    onChange={this.onFileChange.bind(this)}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    multiple />
                </label>
              </div>
              <div>
                <span
                  className="btn-small right blue-text"
                  style={{ marginLeft: '10px' }}>
                  <button
                    onClick={() => this.onDeleteClick(room._id)}>
                    Delete Room
                    </button>
                </span>
                <span
                  className="btn-small right blue-text"
                  style={{ marginLeft: '10px' }}>
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

export default connect(mapStateToProps, actions)(RoomList);