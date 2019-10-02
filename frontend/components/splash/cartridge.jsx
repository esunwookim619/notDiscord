import React from "react";

class Cartridge extends React.Component {
  render() {
    return (
      <img className="cartridge" src={window.cartridgeURL} />
    )
  }
}

export default Cartridge;