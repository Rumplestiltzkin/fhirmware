'use babel';

import React from 'react';

export default class Main extends React.Component {
  render() {
    return <div className="container">
        <h1 className="row page-header">FHIRMWare</h1>
        <p className="alert alert-info">
          We are using node { process.versions.node }, Chrome { process.versions.chrome },  Electron { process.versions.electron }.
        </p>
      </div>;
  }
}
