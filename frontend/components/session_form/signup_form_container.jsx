import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const msp = state => {
  return {
    errors: state.errors.session, 
    formType: "Signup",
    user: { email: "", password: "", username: "" }
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(msp, mdp)(SessionForm);