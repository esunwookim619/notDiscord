import { connect } from 'react-redux';
import UserCircle from './user_circle';
import { withRouter } from 'react-router-dom';


const msp = (state) => {
  let currentUserId = state.session.id;
  return {
    currentUserId: currentUserId
  };
};



export default withRouter(connect(msp)(UserCircle));