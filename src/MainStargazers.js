import React, { useEffect } from 'react';

function MainStargazers({name,data}) {
  const output = (data.length || !name) ? data : <li className="main-stargazer-item">No stargazers for this repo.</li>;
  return (
    <section className="main-stargazers">
      <h2 className="main-stargazers-header">Stargazers: <span className="main-stargazers-repo">{name}</span></h2>
      <ul>{output}</ul>
    </section>
  );
}

export default MainStargazers;