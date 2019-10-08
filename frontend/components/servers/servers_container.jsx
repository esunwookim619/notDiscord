import { connect } from 'react-redux';
import Servers from './servers';
import { fetchServer, fetchServers, createServer, updateServer, deleteServer, leaveServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const msp = state => {
  let servers = Object.values(state.entities.servers);
  return {
    currentUserId: state.session.id,
    servers: servers,
  };
};

const mdp = dispatch => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id)),
    fetchServers: () => dispatch(fetchServers()),
    createServer: (server) => dispatch(createServer(server)),
    updateServer: (server) => dispatch(updateServer(server)),
    deleteServer: (id) => dispatch(deleteServer(id)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout()),
    leaveServer: (server) => dispatch(leaveServer(server))
  };
};

export default connect(msp, mdp)(Servers);