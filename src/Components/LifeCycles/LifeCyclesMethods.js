import React, { Component } from "react";

class LifeCyclesMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sujit",
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  updateName = () => {
    this.setState({
      name: "Amit",
    });
  };

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate ", prevState.name);
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate ", this.state.name);
  }
  render() {
    console.log("render");
    return (
      <div className="container p-5">
        <h3>Welcome {this.state.name} to Life Cycle</h3>
        <button onClick={this.updateName}>Update</button>
      </div>
    );
  }
}

export default LifeCyclesMethods;
