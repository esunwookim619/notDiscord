import { connect } from 'react-redux';
import Default from './default';
import { withRouter } from 'react-router-dom';
import { fetchUsers, updateUser, deleteFriend } from '../actions/user_actions';
import { fetchDmchannels, deleteDmchannel } from '../actions/dmchannel_actions';


const msp = (state) => {
  return {
    currentUserId: state.session.id,
    users: Object.values(state.entities.users),
    dmchannels: Object.values(state.entities.dmchannels)
  };
};

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteFriend:(friend) => dispatch(deleteFriend(friend)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchDmchannels: () => dispatch(fetchDmchannels()),
    deleteDmchannel: (id) => dispatch(deleteDmchannel(id))
  };
};

export default withRouter(connect(msp, mdp)(Default));