import axios from "axios";
import React, { Component } from "react";

class BtcPriceData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btclive: [],
      allpairs: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
      .then((res) => {
        this.setState({
          btclive: res.data,
          //   allpairs: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://www.binance.com/api/v3/ticker/price")
      .then((allres) => {
        this.setState({
          //   btclive: res.data,
          allpairs: allres.data,
        });
        console.log(allres.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container p-5">
        <h3>BTC Live Data</h3>
        <table>
          <thead>
            <tr>
              <th>Pair Name</th>
              <th>Live Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.btclive.symbol}</td>
              <td>{this.state.btclive.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BtcPriceData;
