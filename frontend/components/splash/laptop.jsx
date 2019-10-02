import React from "react";

class Laptop extends React.Component {
  render() {
    return (
      <img className="laptop" src={window.laptopURL} />
    )
  }
}

export default Laptop;