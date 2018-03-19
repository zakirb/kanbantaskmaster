import { ADD_PROJECT } from '../constants/action-types';


export const addProject = project => (
  { type: ADD_PROJECT, payload: project}
)
