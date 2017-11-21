import * as types from '../const/actionTypes';

export const getUsers = () => ({
  type: types.GET_USERS
});

export const addUser = user => ({
  type: types.ADD_USER,
  user
});

export const deleteUser = user => ({
  type: types.DELETE_USER,
  user
});
export const editUser = user => ({
  type: types.EDIT_USER,
  user
});
