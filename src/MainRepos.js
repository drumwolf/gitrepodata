import React from 'react';

export default function({user,repos}) {
  return (
    <section className="main-repos">
      <h2 className="main-repos-header">{user}'s repositories</h2>
    <ul>{repos}</ul>
  </section>
  );
}