import React, { Component } from "react";

class MobileEx extends Component {
  render() {
    return (
      <div className="mobile">
        <figure>
          <img src={this.props.path} alt="" />
          <figcaption>
            <h4>{this.props.title}</h4>
            <p>{this.props.price}</p>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default MobileEx;
