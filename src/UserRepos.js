import React, { useEffect } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return store;
};

const fetchUser = async (username) => {
  const resp = await fetch(`https://api.github.com/users/${username}`);
  const data = await resp.json();
  console.log(data)
}

function ConnectedRepos(props) {
  useEffect( () => getUserData(props.username) );
  const getUserData = (username) => { if (username) fetchUser(username) }

  return (<React.Fragment>


  </React.Fragment>); 
}

const UserRepos = connect(mapStateToProps)(ConnectedRepos);

export default UserRepos;