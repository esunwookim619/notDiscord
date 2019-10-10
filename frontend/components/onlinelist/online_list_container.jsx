import { connect } from 'react-redux';
import OnlineList from './online_list';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';


const msp = (state, ownProps) => {

  let serverId = parseInt(ownProps.match.params.serverId);

  return {
    currentServerId: serverId,
    users: Object.values(state.entities.users)
  };
};

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default withRouter(connect(msp, mdp)(OnlineList));