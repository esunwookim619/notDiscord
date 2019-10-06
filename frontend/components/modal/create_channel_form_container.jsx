import { connect } from 'react-redux';
import CreateChannelForm from './create_channel_form';
import { createChannel } from '../../actions/channel_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
 
  const currentServerId = parseInt(ownProps.location.pathname.split("/")[2]);
  return {
    currentServerId: currentServerId,
  };
};

const mdp = dispatch => {
  return {
    createChannel: (channel) => dispatch(createChannel(channel)),
    openModal: (str) => dispatch(openModal(str)),
    closeModal: () => dispatch(closeModal()),

  };
};

export default withRouter(connect(msp, mdp)(CreateChannelForm));