import React from 'react';
import {List} from 'immutable';
import createReactClass from 'create-react-class';
import ErrorBoundary from '../components/ErrorBoundary'
const pair = List.of('Trainspotting', '28 Days Later');

export default createReactClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
});
