import React, { useEffect } from 'react';

function MainStargazers({name,data}) {
  return (
    <section className="main-stargazers">
      <h2 className="main-stargazers-header">Stargazers: {name}</h2>
      <ul>{data}</ul>
    </section>
  );
}

export default MainStargazers;