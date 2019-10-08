import { connect } from 'react-redux';
import Invite from './invite';
import { inviteServer, fetchServers } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
  
  let invitation = ownProps.location.pathname.split("/")[3];
  return {
    invitation_url: invitation,
    servers: Object.values(state.entities.servers)
  };
};

const mdp = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    inviteServer: (server) => dispatch(inviteServer(server)),
  };
};

export default withRouter(connect(msp, mdp)(Invite));