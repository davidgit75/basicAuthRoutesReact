import { SET_USER } from './types';

export const userAction = user => ({
  type: SET_USER,
  payload: user
});