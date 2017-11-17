import * as types from '../const/actionTypes';

export const getUsers = () => ({
  type: types.GET_USERS
});

export const addUser = (user) => ({
  type: types.ADD_USER,
  user
});
