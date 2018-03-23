// import { ADD_PROJECT } from '../constants/action-types';
import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';
import { LOGOUT } from '../constants/action-types';
import { LIFT_PROJECT_TO_STATE } from '../constants/action-types';
import { RERENDER } from '../constants/action-types';


export const liftProjectToState = project => (
  { type: LIFT_PROJECT_TO_STATE, payload: project}
)

export const liftTokenToState = userToken => (
  { type: LIFT_TOKEN_TO_STATE, payload: userToken}
)

export const logout = () => (
  { type: LOGOUT, payload: "logout payload"}
)

export const rerender = () => (
  { type: RERENDER, payload: "rerender payload"}
)
