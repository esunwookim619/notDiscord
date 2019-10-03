import React from "react";

class Triangle extends React.Component {

  render() {
    return (
      <img className={`triangle${this.props.num}`} src={window.triangleURL} />
    )
  }
}

export default Triangle;