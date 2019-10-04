import { connect } from 'react-redux';
import Servers from './servers';
import { fetchServers, createServer, updateServer, deleteServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = state => {
  return {
    currentUserId: state.session.id,
    servers: Object.values(state.entities.servers)
  };
};

const mdp = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    createServer: (server) => dispatch(createServer(server)),
    updateServer: (server) => dispatch(updateServer(server)),
    deleteServer: (id) => dispatch(deleteServer(id)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Servers);