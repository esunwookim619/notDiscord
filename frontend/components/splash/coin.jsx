import React from "react";

class Coin extends React.Component {
  render() {
    return (
      <img className={`coin${this.props.num}`} src={window.coinURL} />
    )
  }
}

export default Coin;