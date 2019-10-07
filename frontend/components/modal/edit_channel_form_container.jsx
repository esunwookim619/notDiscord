import { connect } from 'react-redux';
import EditChannelForm from './edit_channel_form';
import { updateChannel } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
  let channelId = parseInt(ownProps.location.pathname.split("/")[3]);
  return {
    currentUserId: state.session.id,
    channel: state.entities.channels[channelId]
  };
};

const mdp = dispatch => {
  return {
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal()),

  };
};

export default withRouter(connect(msp, mdp)(EditChannelForm));