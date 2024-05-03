import React, { Component } from "react";

class WelcomeEx extends Component {
  componentWillUnmount() {
    alert("Logout Successful");
  }
  render() {
    return (
      <div>
        <h3>Welcome to Admin Dashboard</h3>
      </div>
    );
  }
}

export default WelcomeEx;
