import React from "react";

class Desktop extends React.Component {
  render() {
    return (
      <img className="desktop" src={window.desktopURL} />
    )
  }
}

export default Desktop;