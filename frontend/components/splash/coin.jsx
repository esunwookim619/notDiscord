import React from "react";

class Coin extends React.Component {
  render() {
    return (
      <img className="coin" src={window.coinURL} />
    )
  }
}

export default Coin;