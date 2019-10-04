import { connect } from 'react-redux';
import CreateServerForm from './create_server_form';
import { createServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = state => {
  return {
    currentUserId: state.session.id,
    server: { server_name: "" }
  };
};

const mdp = dispatch => {
  return {
    createServer: (server) => dispatch(createServer(server)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(CreateServerForm);