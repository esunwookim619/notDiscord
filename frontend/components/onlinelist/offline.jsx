import React from "react";

class Offline extends React.Component {
  render() {
    return (
      <img className="offlinecircle" src={window.offline} />
    )
  }
}

export default Offline;