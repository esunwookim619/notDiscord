import { connect } from 'react-redux';
import JoinServerForm from './join_server_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mdp = dispatch => {
  return {
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(JoinServerForm);