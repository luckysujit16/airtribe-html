import React, { Component } from "react";

class BasicClass extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to {this.props.topic}</h1>
      </div>
    );
  }
}

export default BasicClass;

