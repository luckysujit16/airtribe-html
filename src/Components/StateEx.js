import React, { Component } from "react";

class StateEx extends Component {
  constructor() {
    super();

    //intialize the state value
    this.state = {
      name: "Sujit",
      role: "Web-Designer",
      count: 0,
    };
  }

  updateState = () => {
    // alert("Working");
    this.setState({
      name: "Sachin",
      role: "React Dev",
    });
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div className="container p-5">
        <h3>
          StateEx - {this.state.name} as a {this.state.role}
        </h3>
        <button onClick={this.updateState} className="mt-3">
          Update Data
        </button>
        <h3>Counter : {this.state.count} </h3>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Sub</button>
      </div>
    );
  }
}

export default StateEx;
