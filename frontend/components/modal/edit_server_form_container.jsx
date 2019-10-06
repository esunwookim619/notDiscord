import { connect } from 'react-redux';
import EditServerForm from './edit_server_form';
import { updateServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
  let serverId = parseInt(ownProps.location.pathname.split("/")[2]);
 
  return {
    currentUserId: state.session.id,
    server: state.entities.servers[serverId]
  };
};

const mdp = dispatch => {
  return {
    updateServer: (server) => dispatch(updateServer(server)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(msp, mdp)(EditServerForm));