import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
const bootstrap = require('bootstrap');

window.onload = function () {
  ReactDOM.render(
    <div id="app">
      <Main title="FHIRMWare" subtitle="FHIR Model Management" />
      <Footer />
    </div>,
    document.body
  );
}
