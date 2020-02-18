import React, { Component } from 'react';
import Header from './Header';
import UserRepos from './UserRepos';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <UserRepos />
        </main>
      </div>
    );
  }
}

export default App;
