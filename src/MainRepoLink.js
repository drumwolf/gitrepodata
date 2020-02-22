import React from 'react';

const onStargazersLinkClick = (e,name) => {
  e.preventDefault();
  console.log(name)
}

function MainRepoLink(props) {
  const {name, url} = props;
  return (
    <li className="main-repo-item">
      <p><a className="main-repo-link" href={url} target="_blank">{name}</a></p>
      <a href="#" className="main-repo-stargazers-link" onClick={e => onStargazersLinkClick(e,name)}>see stargazers</a>
    </li>
  );
}

export default MainRepoLink;