import { connect } from 'react-redux';
import UserCircleFriend from './user_circle_friend';
import { withRouter } from 'react-router-dom';


const msp = (state) => {
  let currentUserId = state.session.id;
  return {
    currentUserId: currentUserId
  };
};



export default withRouter(connect(msp)(UserCircleFriend));