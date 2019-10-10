import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';
import { fetchMessages, deleteMessage, createMessage, receiveMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import { fetchChannels } from '../../actions/channel_actions';


const msp = (state, ownProps) => {
 
  let channelId = parseInt(ownProps.match.params.channelId);
  
  return {
    currentChannelId: channelId,
    currentUserId: state.session.id,
    messages: Object.values(state.entities.messages),
    users: Object.values(state.entities.users),
    channels: Object.values(state.entities.channels)
  };
};

const mdp = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchUsers: () => dispatch(fetchUsers()),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    fetchMessages: () => dispatch(fetchMessages()),
    deleteMessage: (id) => dispatch(deleteMessage(id)),
    createMessage: (message) => dispatch(createMessage(message))
  };
};

export default withRouter(connect(msp, mdp)(ChatRoom));