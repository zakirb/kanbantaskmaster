// import { ADD_PROJECT } from "../constants/action-types";
import { LIFT_TOKEN_TO_STATE } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";

const initialState = {
  user: '',
  token:''
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
    default:
      return state;
  }
}

export default rootReducer;
