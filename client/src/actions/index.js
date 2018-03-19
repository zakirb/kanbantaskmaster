import { ADD_PROJECT } from '../constants/action-types';
import { ADD_USER } from '../constants/action-types';


export const addProject = project => (
  { type: ADD_PROJECT, payload: project}
)

export const addUser = user => (
  { type: ADD_PROJECT, payload: user}
)
