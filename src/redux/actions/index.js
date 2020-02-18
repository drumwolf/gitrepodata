import { ADD_USER, ADD_REPOS } from './constants';

export function addUser(user) {
  return { type: ADD_USER, payload: user }
};
export function addRepos(repos) {
  return { type: ADD_REPOS, payload: repos }
};