import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { fetchChannels, fetchChannel, createChannel, updateChannel, deleteChannel } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const currentServerId = parseInt(ownProps.match.params.serverId)
  
  return {
    currentServerId: currentServerId,
    channels: Object.values(state.entities.channels)
  };
};

const mdp = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal()),
   
  };
};

export default connect(msp, mdp)(ChannelsIndex);