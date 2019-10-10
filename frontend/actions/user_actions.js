import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUsers = () => dispatch => {
  return UserApiUtil.fetchUsers()
    .then(users => {
      dispatch(receiveUsers(users))
    });
}

export const updateUser = (user) => dispatch => {
 
  return UserApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)))
}