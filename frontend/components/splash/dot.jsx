import React from "react";

class Dot extends React.Component {

  render() {
    return (
      <img className={`dot${this.props.num}`} src={window.dotURL} />
    )
  }
}

export default Dot;