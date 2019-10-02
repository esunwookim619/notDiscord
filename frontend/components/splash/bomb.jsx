import React from "react";

class Bomb extends React.Component {
  render() {
    return (
      <img className="bomb" src={window.bombURL} />
    )
  }
}

export default Bomb;