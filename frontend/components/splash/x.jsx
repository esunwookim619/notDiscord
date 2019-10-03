import React from "react";

class X extends React.Component {

  render() {
    return (
      <img className={`x${this.props.num}`} src={window.xURL} />
    )
  }
}

export default X;