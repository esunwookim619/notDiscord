import React from "react";

class Circle extends React.Component {
  render() {
    return (
      <img className="circle" src={window.circleURL} />
    )
  }
}

export default Circle;