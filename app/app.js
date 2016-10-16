/*import React from 'react';
import ReactDOM from 'react-dom';
*/
var React = require('react');
var ReactDOM = require('react-dom');

var Comment = React.createClass({
        edit: function() {
            alert('Editing comment');
        },
        
        remove: function () {
            alert("Removing comment");
        },
        
        render: function () {
            return (
                <div className="commentContainer">
                    <div className="commentText">{this.props.children}</div>
                    <button onClick={this.edit} className="button-primary">Edit</button>
                    <button onClick={this.remove} className="button-danger">Remove</button>
                </div>
            );
        }
    });

var Component = React.createClass({
  render: function() {
    return (
      <div>{this.props.text}</div>
    );
 }

});

ReactDOM.render(
    <div>
        <Comment>Hey my name is Fercsi</Comment>
        <Comment>Beans</Comment>
        <Comment>Tuna</Comment>
    </div>,


    document.getElementById('main')
);
    





