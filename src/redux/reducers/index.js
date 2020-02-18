import { ADD_USER, ADD_REPOS } from '../actions/constants';

const initialState = {
  user: null,
  repos: [],
  stargazers: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
  	return {...state, user: action.payload}
  }
  if (action.type === ADD_REPOS) {
  	return {...state, repos: action.payload}
  }
  return state;
};

export default rootReducer;