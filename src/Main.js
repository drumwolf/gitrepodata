import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainRepoLink from './MainRepoLink';
import './Main.css';

const mapStateToProps = store => {
  return store;
};

function MainGreeting(props) {
  return (
    <section>Please enter the username of a Github user in the input form in the top left header.</section>
  );
}

function ConnectedMain(props) {
  useEffect( () => console.log("props: ",props) );
  const user = props.user;
  const repos = (props.repos.length) ? props.repos.map( repo =>
    <MainRepoLink key={'repo_'+repo.id} user={user.login} repo={repo.name} url={repo.html_url} />) : [];

  return (<main className="main">
    {!user && <MainGreeting />}
    {user && <React.Fragment>
      <section className="main-profile">
        <a href={user.html_url} target="_blank" rel="noopener noreferrer"><img src={user.avatar_url} alt={user.name} className="main-profile-avatar" /></a>
        <div className="main-profile-info">
          <h1 className="main-profile-name">{user.name}</h1>
          <a className="main-profile-link" href={user.html_url} target="_blank" rel="noopener noreferrer">@{user.login}</a>
        </div>
      </section>
      <ul className="main-repos">{repos}</ul>
    </React.Fragment>}
  </main>); 
}

const Main = connect(mapStateToProps)(ConnectedMain);

export default Main;