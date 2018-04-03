import React, { Component } from 'react';

class Landing extends Component {
  createAlert()
  {
    return alert("This site currently under development.");
  }
  render() {
    return (
      <div>
        {this.createAlert()};
        <h2>Welcome to DSA Landing </h2>
      </div>
    );
  }
}

export default Landing;