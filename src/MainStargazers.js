import React, { useEffect } from 'react';

function MainStargazers({name,data}) {
  return (
    <section className="main-stargazers">
      <h2 className="main-stargazers-header">Stargazers: <span className="main-stargazers-repo">{name}</span></h2>
      <ul>{data}</ul>
    </section>
  );
}

export default MainStargazers;