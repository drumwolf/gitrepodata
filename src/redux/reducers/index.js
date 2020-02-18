import { ADD_USER } from '../actions/constants';

const initialState = {
  user: null,
  repos: [],
  stargazers: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
  	return {...state, user: action.payload}
  }
  return state;
};

export default rootReducer;