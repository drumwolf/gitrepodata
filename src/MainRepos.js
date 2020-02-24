import React from 'react';

export default function({user,repos}) {
  return (
    <section className="main-repos">
      <h2 className="main-repos-header">Repos: <span className="main-repos-user">@{user}</span></h2>
    <ul>{repos}</ul>
  </section>
  );
}