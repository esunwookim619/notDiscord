import * as MessageApiUtil from "../util/message_api_util";

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

const receiveMessages = (messages) => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    messages
  }
};

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  }
};

const removeMessage = (message) => {
  return {
    type: REMOVE_MESSAGE,
    serverId: message.id
  }
};

export const fetchMessages = () => dispatch => {
  return MessageApiUtil.fetchMessages()
    .then(messages => {
      
      dispatch(receiveMessages(messages))});
}

export const createMessage = (message) => dispatch => {
  return MessageApiUtil.createMessage(message)
    .then(message => dispatch(receiveMessage(message)));
}

export const deleteMessage = (id) => dispatch => {
  return MessageApiUtil.deleteMessage(id)
    .then(message => dispatch(removeMessage(message)));
}


