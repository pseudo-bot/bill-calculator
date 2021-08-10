import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import '../public/style.css';

import logo from './assets/logo.svg';

ReactDOM.render(<div id="root">
    <img src={logo} alt="logo" className="logo"/>
    <App />
</div>, document.querySelector('main'));
