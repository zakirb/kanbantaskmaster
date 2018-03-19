// import { ADD_PROJECT } from '../constants/action-types';
import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';


// export const addProject = project => (
//   { type: ADD_PROJECT, payload: project}
// )

export const liftTokenToState = token => (
  { type: LIFT_TOKEN_TO_STATE, payload: token}
)
