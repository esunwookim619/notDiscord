import { connect } from 'react-redux';
import EditUserForm from './edit_user_form';
import { closeModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';


const msp = (state) => {
    let currentUserId = state.session.id;
  return {
    user: state.entities.users[currentUserId]
  };
};

const mdp = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(msp, mdp)(EditUserForm));