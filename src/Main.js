import React, { useEffect } from 'react';
import { connect } from "react-redux";
import './Main.css';

const mapStateToProps = store => {
  return store;
};

function MainRepoLink(props) {
  const {name, url} = props;
  return (<li className="main-repo-item"><a className="main-repo-link" href={url} target="_blank">{name}</a></li>);
}

function ConnectedMain(props) {
  useEffect( () => console.log("props: ",props) );
  const user = props.user;
  const repos = (props.repos.length) ? props.repos.map( repo => <MainRepoLink key={'repo_'+repo.id} name={repo.name} url={repo.html_url}  />) : [];

  return (<main className="main">
    {user && <React.Fragment>
      <section className="main-profile">
        <a href={user.html_url} target="_blank"><img src={user.avatar_url} className="main-profile-avatar" /></a>
        <div className="main-profile-info">
          <h1 className="main-profile-name">{user.name}</h1>
          <a className="main-profile-link" href={user.html_url} target="_blank">@{user.login}</a>
        </div>
      </section>
      <ul className="main-repos">{repos}</ul>
    </React.Fragment>}
  </main>); 
}

const Main = connect(mapStateToProps)(ConnectedMain);

export default Main;