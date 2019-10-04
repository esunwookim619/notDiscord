import * as ServerApiUtil from "../util/server_api_util";

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";

const receiveServers = (servers) => {
  return {
    type: RECEIVE_ALL_SERVERS,
    servers
  }
};

const receiveServer = (server) => {
  return {
    type: RECEIVE_SERVER,
    server
  }
};

const removeServer = (server) => {
  return {
    type: REMOVE_SERVER,
    serverId: server.id
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

export const updateServer = (server) => dispatch => {
  return ServerApiUtil.updateServer(server)
    .then(server => dispatch(receiveServer(server)));
}

export const deleteServer = (id) => dispatch => {
  return ServerApiUtil.deleteServer(id)
    .then(server => dispatch(removeServer(server)));
}