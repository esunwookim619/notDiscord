import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return merge({}, state, action.messages);
    case RECEIVE_MESSAGE:
      newState = merge({}, state);
      delete newState[action.message.id];
      return merge({}, newState, { [action.message.id]: action.message });
    case REMOVE_MESSAGE:
      newState = merge({}, state);
      delete newState[action.messageId];
      return newState;
    default:
      return state;
  }
};