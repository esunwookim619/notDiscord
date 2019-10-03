import React from "react";

class Potion extends React.Component {
  render() {
    return (
      <img className="potion" src={window.potionURL} />
    )
  }
}

export default Potion;