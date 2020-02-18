import React, { useEffect } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return store;
};

function ConnectedRepos(props) {
  useEffect( () => console.log("user: ",props) );
  return (<React.Fragment></React.Fragment>); 
}

const UserRepos = connect(mapStateToProps)(ConnectedRepos);

export default UserRepos;