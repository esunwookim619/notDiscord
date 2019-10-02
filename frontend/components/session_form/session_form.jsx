import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user) 
      .then(() => { this.props.history.push("/") }); 
   
  }

  render() {
    let header;
    let other;
    let errors;
    if (this.props.formType === "login") {
      header = "Log In";
      other = "signup";
    } else {
      header = "Sign Up";
      other = "login";
    }
    if (this.props.errors) {
      errors = this.props.errors.map(error => {
        return <li key={Math.random()}>{error}</li>;
      })
    }
    return (
      <div className="form_background">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>{header}</h1>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.update("email")} />
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update("password")} />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
        <Link to={`/${other}`}>{other}</Link>
        <ul>
          {errors}
        </ul>
      </div>
    )
  }
}

export default withRouter(SessionForm); 