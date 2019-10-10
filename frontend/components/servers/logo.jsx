import React from "react";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img className={`logo${this.props.num}`} src={window.logoURL} />
    )
  }
}

export default Logo;