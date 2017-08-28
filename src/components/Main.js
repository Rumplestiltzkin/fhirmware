'use babel';

import React from 'react';
import Button from './Button';


export default class Main extends React.Component {
  render() {
    return <div id="main" className="container">
      <div className="row page-header">
        <div className="col-11">
          <h1>{this.props.title} {this.props.subtitle && <small>{this.props.subtitle}</small>}</h1>
        </div>
        <div className="col-1">
          <Button faIcon="sign-in" type="primary" addtlClass="h1" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
            <h2>Welcome to FHIRMWare</h2>
            <p>FHIRMWare is an application for creating, editing and managing collections of FHIR models -- logical models, resource definitions, value sets, code sets, &amp;c.  It's primary strength is that it is built on a Neo4J database which allows inter-model connections to be made.</p>
        </div>
      </div>
    </div>;
  }
}