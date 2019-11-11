import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
    this.typeDemoUser = this.typeDemoUser.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
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
      .then(() => { this.props.history.push("/channels/@me") }); 
  }


  typeDemoUser(e) {
    e.preventDefault();
    let demoemail = {
      strings: ["demo@gmail.com"],
      typeSpeed: 50, };
    let password = {
      strings: ["password"],
      typeSpeed: 50, };

    // this.setState({email: "", password:""});

    new Typed(".demo-email", demoemail );

    setTimeout(() => {
      new Typed(".demo-password", password);
    }, 1400);

    setTimeout(() => {
      this.props.processForm({ email: "demo@gmail.com", password: "password" }).then(() => { this.props.history.push("/channels/@me") }); 
    }, 2400);
  }

  errors(field) {
    if (this.props.errors.length > 0) {
      let errors = this.props.errors
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].includes(field)) {
          return "-" + errors[i];
        }
      }
    }
  }

  individualError(field) {
    if (this.errors(field)) {
      return "error";
    } else {
      return "";
    }
  }

  render() {
    let header;
    let other;
    let label = "label";
    let input = "input";
    let link;
    let username;
    let extra;
    let form;
    let demo;
    if (this.props.formType === "Login") {
      header = (
        <>
        <h1 className="greeting">Welcome back!</h1>
        <p className="extra">We're so excited to see you again!</p>
        </>
      );
      other = "Register";
      extra = "Need an account?";
      link = "signup";
      form = "loginform"
      demo = (
        <button className="inputform" onClick={this.typeDemoUser}>Demo Login</button>
      );
    } else {
      header = (
        <>
          <h1 className="greeting">Create an account</h1>
        </>
      );
      other = "Already have an account?";
      link = "login";
      extra = "";
      form = "signupform";
      username = (
        <>
          <label className={this.individualError("Username") + label}>USERNAME <span className="errormessage">{this.errors("Username")}</span></label>
          <input className={this.individualError("Username") + input} type="text" value={this.state.username} onChange={this.update("username")} />
        </>
      )
    }
    
    return (
      <>
      <div className="form_background">
        <form className={form} onSubmit={this.handleSubmit}>
          {header}
            <label className={this.individualError("Email") + label}>EMAIL <span className="errormessage">{this.errors("Email")}</span></label>
            <input className={this.individualError("Email") + input + " " + "demo-email"} type="email" value={this.state.email} onChange={this.update("email")} />

            {username}
         
            <label className={this.individualError("Password") + label}>PASSWORD <span className="errormessage">{this.errors("Password")}</span></label>
            <input className={this.individualError("Password") + input + " " + "demo-password"} type="password" value={this.state.password} onChange={this.update("password")} />
            <p className="forgot">Forgot your password?</p>
            <input className="inputform" type="submit" value={this.props.formType} />
            <p className="question">{extra} <Link className="switchlink" to={`/${link}`}>{other}</Link></p>
            {demo}
        </form>
      
      </div>
      </>
    )
  }
}

export default withRouter(SessionForm); 