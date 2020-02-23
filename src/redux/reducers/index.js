import { ADD_USER, ADD_REPOS, ADD_STARGAZERS } from '../actions/constants';

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
  if (action.type === ADD_STARGAZERS) {
    return {...state, stargazers: action.payload}
  }
  return state;
};

export default rootReducer;