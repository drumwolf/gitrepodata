import { ADD_USER, ADD_REPOS, ADD_STARGAZERS } from './constants';

export function addUser(user) {
  return { type: ADD_USER, payload: user }
};
export function addRepos(repos) {
  return { type: ADD_REPOS, payload: repos }
};
export function addStargazers(stargazers) {
  return { type: ADD_STARGAZERS, payload: stargazers }
};