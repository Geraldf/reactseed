import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import createReactClass from 'create-react-class';

export default createReactClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>Hello from results!</div>
  }
});