import React, { Component } from "react";
import WelcomeEx from "./WelcomeEx";
import LoginEx from "./LoginEx";

class WillUnMount extends Component {
  constructor(props) {
    super();

    this.state = {
      login: true,
    };
  }

  logout = () => {
    this.setState({
      login: false,
    });
  };

  render() {
    let msg = "";
    if (this.state.login) {
      msg = <WelcomeEx />;
    } else {
      msg = <LoginEx />;
    }
    return (
      <div className="container p-5">
        <h3>{msg}</h3>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default WillUnMount;
