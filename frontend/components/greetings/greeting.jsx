import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div className="login">
          <Link className="login_write" to="/channels/@me">Open</Link>
        </div>
      );
    } else {
      return (
        <div className="login">
          <Link className="login_write" to="/login">Login</Link>
        </div>
      );
    }
  }
}

export default Greeting;