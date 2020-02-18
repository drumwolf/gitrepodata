import React, { useEffect } from 'react';
import { connect } from "react-redux";
import './Main.css';

const mapStateToProps = store => {
  return store;
};

function ConnectedRepos(props) {
  useEffect( () => console.log("props: ",props) );
  const user = props.user;

  return (<main>
    {user && <React.Fragment>
      <section className="main-profile">
        <img src={user.avatar_url} className="main-avatar" />
        <div className="main-info">
          <h1 className="main-name">{user.name}</h1>
          <a className="main-link" href={user.html_url} target="_blank">@{user.login}</a>
        </div>
      </section>
    </React.Fragment>}
  </main>); 
}

const Main = connect(mapStateToProps)(ConnectedRepos);

export default Main;