import { connect } from 'react-redux';
import EditServerForm from './edit_server_form';
import { updateServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = state => {
  return {
    currentUserId: state.session.id,
    server: { server_name: "" } //start with the actual name
  };
};

const mdp = dispatch => {
  return {
    updateServer: (server) => dispatch(updateServer(server)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(EditServerForm);