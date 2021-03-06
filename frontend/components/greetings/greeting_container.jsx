import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const msp = state => {
  const currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
  }
}

export default connect(msp)(Greeting);