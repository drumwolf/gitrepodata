import React from 'react';

function MainGreeting(props) {
  return (<React.Fragment>
      <img src={process.env.PUBLIC_URL + "/githubrepo.png"} alt="Git Repo Data" className="main-default-avatar" />
      <section>
        <h1 className="main-default-header">Github Repo Data</h1>
        <p className="main-default-text">
          To view a particular Github user's repos and data associated with them,
          enter the username in the input form in the top header.
        </p>
      </section>
    </React.Fragment>
  );
}

export default MainGreeting;