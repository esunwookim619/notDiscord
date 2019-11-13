import React from 'react';
import FriendItemDefault from './friend_item_default';
import { withRouter } from 'react-router-dom';
import { makeFriend, deleteFriend } from '../../actions/user_actions'
import { connect } from 'react-redux';
import { createDmchannel } from '../../actions/dmchannel_actions';

const msp = state => {
  return {
    currentUserId: state.session.id
  }
}

const mdp = dispatch => {

  return {
    makeFriend: (friend) => dispatch(makeFriend(friend)),
    deleteFriend: (friend) => dispatch(deleteFriend(friend)),
    createDmchannel: (dmchannel) => dispatch(createDmchannel(dmchannel))
  };
};



export default withRouter(connect(msp, mdp)(FriendItemDefault));