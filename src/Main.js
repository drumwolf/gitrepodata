import React, { useEffect } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return store;
};

function ConnectedRepos(props) {
  useEffect( () => console.log("props: ",props) );
  const user = props.user;

  return (<main>
    {user && <div className="main-profile">
      <img src={user.avatar_url} className="main-avatar" />
      <div>
        <h1 className="main-name">{user.name}</h1>
        <p>{user.login}</p>
      </div>
    </div>}
  </main>); 
}

const Main = connect(mapStateToProps)(ConnectedRepos);

export default Main;