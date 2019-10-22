import {
  RECEIVE_ALL_DMCHANNELS, RECEIVE_DMCHANNEL, REMOVE_DMCHANNEL
} from "../actions/dmchannel_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_DMCHANNELS:
      return merge({}, state, action.dmchannels);
    case RECEIVE_DMCHANNEL:
      return merge({}, state, { [action.dmchannel.id]: action.dmchannel });
    case REMOVE_DMCHANNEL:
      newState = merge({}, state);
      delete newState[action.dmchannelId];
      return newState;
    default:
      return state;
  }
};
