import React, { useEffect } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return store;
};

function ConnectedRepos(props) {
  useEffect( () => console.log("props: ",props) );
  const user = props.user;

  return (<React.Fragment>
    {user && <div className="main-profile">
      <img src={user.avatar_url} className="main-avatar" />
      <div>
        <h1 className="main-name">{user.name}</h1>
        <p>{user.login}</p>
      </div>
    </div>}
  </React.Fragment>); 
}

const UserRepos = connect(mapStateToProps)(ConnectedRepos);

export default UserRepos;