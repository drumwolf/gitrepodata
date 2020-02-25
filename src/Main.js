import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainDefault from './MainDefault';
import MainRepos from './MainRepos';
import MainRepoLink from './MainRepoLink';
import MainStargazers from './MainStargazers';
import './Main.css';

const mapStateToProps = store => {
  return store;
};

function ConnectedMain(props) {
  useEffect( () => console.log("props: ",props) );
  const { user, repo, repos, stargazers } = props;
  const repoLinks = (repos.length) ? repos.map( repo =>
    <MainRepoLink key={'repo_'+repo.id} user={user.login} repo={repo.name} url={repo.html_url} />) : [];
  const stargazerLinks = (stargazers.length) ? stargazers.map( user => {
    const { login, html_url, avatar_url, id } = user;
    return <li key={id} className="main-stargazer-item"><img src={avatar_url} className="main-stargazer-avatar" /><a href={html_url} className="main-stargazer-link">{login}</a></li>
  }) : [];

  return (<main className="main">
    {!user && <MainDefault />}
    {user && <React.Fragment>
      <section className="main-profile">
        <a href={user.html_url} target="_blank" rel="noopener noreferrer"><img src={user.avatar_url} alt={user.name} className="main-profile-avatar" /></a>
        <div className="main-profile-info">
          <h1 className="main-profile-name">{user.name}</h1>
          <a className="main-profile-link" href={user.html_url} target="_blank" rel="noopener noreferrer">@{user.login}</a>
        </div>
      </section>
      <MainRepos user={user.login} repos={repoLinks} />
      <MainStargazers name={repo} data={stargazerLinks} />
    </React.Fragment>}
  </main>); 
}

const Main = connect(mapStateToProps)(ConnectedMain);

export default Main;