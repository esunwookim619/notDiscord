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

const receiveMessage = (message) => {
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

export const fetchServers = () => dispatch => {

  return ServerApiUtil.fetchServers()
    .then(servers => dispatch(receiveServers(servers)));
}



export const createServer = (server) => dispatch => {
  return ServerApiUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)));
}



export const deleteServer = (id) => dispatch => {
  return ServerApiUtil.deleteServer(id)
    .then(server => dispatch(removeServer(server)));
}

