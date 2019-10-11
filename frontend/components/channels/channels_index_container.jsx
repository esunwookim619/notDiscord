import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { fetchChannels, fetchChannel, updateChannel, deleteChannel } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchServers } from '../../actions/server_actions'; 
import { updateUser, fetchUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {
    const currentServerId = parseInt(ownProps.match.params.serverId)
    const currentChannelId = parseInt(ownProps.match.params.channelId)

  return {
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    currentChannelId: currentChannelId,
    currentServerId: currentServerId,
    channels: Object.values(state.entities.channels),
    servers: Object.values(state.entities.servers),
    currentServer: state.entities.servers[currentServerId] // try this method to fix problem
  };
};

const mdp = dispatch => {
  return {
    // fetchUsers: () => dispatch(fetchUsers()),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchServers: () => dispatch(fetchServers()),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal()),
   
  };
};

export default connect(msp, mdp)(ChannelsIndex);