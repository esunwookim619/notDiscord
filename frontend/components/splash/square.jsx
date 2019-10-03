import React from "react";

class Square extends React.Component {

  render() {
    return (
      <img className={`square${this.props.num}`} src={window.squareURL} />
    )
  }
}

export default Square;