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
    return Object.assign({}, state, { token: action.payload})




    default:
    return state;
  }
}

export default rootReducer;
