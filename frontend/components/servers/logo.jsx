import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <img className="logo" src={window.logoURL} />
    )
  }
}

export default Logo;