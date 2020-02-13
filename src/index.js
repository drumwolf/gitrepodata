import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import store from "./redux/store/index";
import { addUsername } from "./redux/actions/index";
window.store = store;
window.addUsername = addUsername;

ReactDOM.render(<App />, document.getElementById('root'));
