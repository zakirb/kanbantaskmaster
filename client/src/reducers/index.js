// import { ADD_PROJECT } from "../constants/action-types";
import { LIFT_TOKEN_TO_STATE } from "../constants/action-types";

const initialState = {
  user: '',
  token:''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIFT_TOKEN_TO_STATE:
      console.log('LIFTING TOKEN TO STATE')
      console.log(action.payload)
      let newState = { user: action.payload.user, token: action.payload.token }
      return Object.assign({}, state, newState)
    default:
      return state;
  }
}

export default rootReducer;
