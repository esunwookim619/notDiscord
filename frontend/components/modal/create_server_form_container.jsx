import { connect } from 'react-redux';
import CreateServerForm from './create_server_form';
import { fetchServers, createServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = state => {
  return {
    currentUserId: state.session.id,
    server: { server_name: "" },
    servers: Object.values(state.entities.servers)
  };
};

const mdp = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    createServer: (server) => dispatch(createServer(server)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(CreateServerForm);