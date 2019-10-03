import React from "react";

class Circle extends React.Component {
  render() {
    return (
      <img className={`circle${this.props.num}`} src={window.circleURL} />
    )
  }
}

export default Circle;