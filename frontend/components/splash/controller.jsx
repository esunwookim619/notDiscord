import React from "react";

class Controller extends React.Component {
  render() {
    return (
      <img className="controller" src={window.controllerURL} />
    )
  }
}

export default Controller;