'use babel';

import React from 'react';

export default class Button extends React.Component {
  render() {
    return <button className={`btn btn-${this.props.type} ${this.props.addtlClass}`}>
        {(this.props.faIcon) ? <span className={`fa fa-${this.props.faIcon}`} /> : this.props.label}
    </button>;
  }
}
