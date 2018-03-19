import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    
    case ADD_ARTICLE:
    console.log('Added article')
      return {...state, articles: [...state.articles, action.payload]}
      // return { Object.assign({}, ...state, {
      //articles: [...starts ], action.payload]
      // }



    default:
    return state;
  }
}

export default rootReducer;
