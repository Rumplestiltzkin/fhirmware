'use babel';

import React from 'react';
import Button from './Button';


export default class Main extends React.Component {
  render() {
    return <div id="footer" className="container">
      <div className="row">
        <div className="col-12">
          <p className="alert alert-info">
            We are using node {process.versions.node}, Chrome {process.versions.chrome},  Electron {process.versions.electron}.
        </p>
        </div>
      </div>
    </div>;
  }
}