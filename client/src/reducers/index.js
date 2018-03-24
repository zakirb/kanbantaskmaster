// works like Array.prototype.reducer(reducer,  initialValue)
// do not mutate arguments, call APIs or use non-pure functions Date.now() Math.random()

import { LIFT_PROJECT_TO_STATE } from "../constants/action-types";
import { LIFT_ALL_PROJECTS_TO_STATE } from "../constants/action-types";
import { LIFT_TOKEN_TO_STATE } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";


const initialState = {
  user: '',
  token:'',
  currentProject: null,
  rerender: null,
  allProjects:null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case LIFT_TOKEN_TO_STATE:
      console.log('LIFTING TOKEN TO STATE (FROM REDUCER)')
      console.log(action.payload)
      localStorage.setItem('mernToken', action.payload.token)
      let newState = { user: action.payload.user, token: action.payload.token }
      return Object.assign({}, state, newState)

    case LOGOUT:
      console.log('LOGGING OUT (FROM REDUCER)')
      console.log(action.payload)
      localStorage.removeItem('mernToken')
      let emptyUser = {user: '', token:''}
      return Object.assign({}, state, emptyUser)

    case LIFT_PROJECT_TO_STATE:
      console.log('LIFTING PROJECT TO STATE')
      console.log(action.payload)
      let newProject = {currentProject: action.payload}
      return Object.assign({}, state, newProject )

    case LIFT_ALL_PROJECTS_TO_STATE:
      console.log('LIFTING ALL PROJECTS TO STATE')
      console.log(action.payload)
      let newProjects = {allProjects: action.payload}
      return Object.assign({}, state, newProjects)


    default:
      return state;
  }
}

export default rootReducer;
