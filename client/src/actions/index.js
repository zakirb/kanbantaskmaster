// import { ADD_PROJECT } from '../constants/action-types';
// import { EDIT_PROJECT } from '../constants/action-types';

import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';
import { LOGOUT } from '../constants/action-types';
import { LIFT_PROJECT_TO_STATE } from '../constants/action-types';
import { LIFT_ALL_PROJECTS_TO_STATE} from '../constants/action-types';
import { CHANGE_TASK_STATUS } from '../constants/action-types';


export const liftProjectToState = project => (
  { type: LIFT_PROJECT_TO_STATE, payload: project}
)

export const liftAllProjectsToState = projects => (
  { type: LIFT_ALL_PROJECTS_TO_STATE, payload: projects}
)

export const liftTokenToState = userToken => (
  { type: LIFT_TOKEN_TO_STATE, payload: userToken}
)

export const logout = () => (
  { type: LOGOUT, payload: "logout payload"}
)

export const changeTaskStatus = task => (
  { type: CHANGE_TASK_STATUS, payload: task}
)

// export const editProject = currentProject => (
//   { type: EDIT_PROJECT, payload: currentProject}
// )
