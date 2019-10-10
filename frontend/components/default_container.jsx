import { connect } from 'react-redux';
import Default from './default';
import { withRouter } from 'react-router-dom';
import { fetchUsers, updateUser, deleteFriend } from '../actions/user_actions';



const msp = (state) => {
  return {
    currentUserId: state.session.id,
    users: Object.values(state.entities.users)
  };
};

const mdp = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteFriend:(friend) => dispatch(deleteFriend(friend)),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default withRouter(connect(msp, mdp)(Default));