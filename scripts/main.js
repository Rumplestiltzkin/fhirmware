import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';

window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
const bootstrap = require('bootstrap');

window.onload = function(){
  ReactDOM.render(<Main />, document.getElementById('app'));
}
