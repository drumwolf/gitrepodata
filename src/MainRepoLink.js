import React from 'react';
import Loader from './Loader';

const onStargazersLinkClick = async (e,user,repo) => {
  e.preventDefault();
  const data = await Loader.getStargazers(user,repo);
  console.log('stargazers :: ', data)
}

function MainRepoLink(props) {
  const {user, repo, url} = props;
  return (
    <li className="main-repo-item">
      <p><a href="#" className="main-repo-link" href={url} target="_blank" rel="noopener noreferrer">{repo}</a></p>
      <a href="#" className="main-repo-stargazers-link" onClick={e => onStargazersLinkClick(e,user,repo)}>see stargazers</a>
    </li>
  );
}

export default MainRepoLink;