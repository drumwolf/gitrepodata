import React from 'react';
import Loader from './Loader';
import { connect } from 'react-redux';
import { addStargazers } from './redux/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addStargazers: stargazers => dispatch(addStargazers(stargazers))
  }
}

function ConnectedLink(props) {
  const {user, repo, url} = props;

  const onStargazersLinkClick = async (e,user,repo) => {
    e.preventDefault();
    const data = await Loader.getStargazers(user,repo);
    props.addStargazers(data);
  }

  return (
    <li className="main-repo-item">
      <p><a href="#" className="main-repo-link" href={url} target="_blank" rel="noopener noreferrer">{repo}</a></p>
      <a href="#" className="main-repo-stargazers-link" onClick={e => onStargazersLinkClick(e,user,repo)}>see stargazers</a>
    </li>
  );
}

const MainRepoLink = connect(null, mapDispatchToProps)(ConnectedLink);

export default MainRepoLink;