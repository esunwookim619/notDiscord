import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, removeErrors } from '../../actions/session_actions';


const msp = state => {
  return {
    errors: state.errors.session, 
    formType: "Login",
    demoUser: {email: "demo@gmail.com", password: "password", username: "DemoUser"},
    user: {email: "", password: "", username: ""}
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(msp, mdp)(SessionForm);