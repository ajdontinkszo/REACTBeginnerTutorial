/*import React from 'react';
import ReactDOM from 'react-dom';
*/
var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  render: function() {
    return (
      <div>{this.props.text}</div>
    );
 }

});

ReactDOM.render(
    <div>
        <Component text="Component text1" />
        <Component text="Component text2" />
        <Component text="Component text3" />
    </div>,
    document.getElementById('main')
);
    





