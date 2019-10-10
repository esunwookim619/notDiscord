import React from 'react';
import UserItem from './user_item';
import { withRouter } from 'react-router-dom';
import { makeFriend, deleteFriend } from '../../actions/user_actions'
import { connect } from 'react-redux';

const msp = state => {
  return {
    currentUserId: state.session.id
  }
}

const mdp = dispatch => {
 
  return {
    makeFriend: (friend) => dispatch(makeFriend(friend)),
    deleteFriend: (friend) => dispatch(deleteFriend(friend))
  };
};



export default withRouter(connect(msp, mdp)(UserItem));