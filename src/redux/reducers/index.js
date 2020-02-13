import { ADD_USERNAME } from '../actions/constants';

const initialState = {
  username: null,
  repos: [],
  stargazers: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USERNAME) {
  	return {...state, ...action.payload}
  }
  return state;
};

export default rootReducer;