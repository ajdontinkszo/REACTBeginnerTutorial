/*import React from 'react';
import ReactDOM from 'react-dom';
*/
var React = require('react');
var ReactDOM = require('react-dom');



/*var CheckBox = React.createClass({
       

    getInitialState: function() {
        return {
            checked: true,
            h3Style: { color : 'green'}
        }
    },

    handleChecked: function(){
        this.setState({checked: !this.state.checked})
    },

    render: function() {
      var msg;
      if (this.state.checked){
          msg = 'checked',
          this.state.h3Style.color = 'green'
      } else {
          msg = 'unchecked'
          this.state.h3Style.color = 'red'
      }
      return (
          <div>
            <input type="checkbox" onChange={this.handleChecked} defaultChecked="this.state.checked" />
            <h3 style={this.state.h3Style}>Checkbox is {msg}</h3>
          </div>
      );
      
  }*/

var Comment = React.createClass({
    getInitialState: function () {
        return {editing: false}
    },

    edit: function () {
        /*alert('Editing comment');*/
        this.setState({editing: true});
    },

    remove: function () {
        alert("Removing comment");
    },

    save: function () {
        var val = this.refs.newText.value;
        console.log("new comment: " + val);
        this.setState({editing: false});
    },

    renderNormal: function(){
         return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={this.edit} className="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    },

    renderForm: function() {
         return (
            <div className="commentContainer">
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save} className="button-success">Save</button>
            </div>
        );
    },

    render: function () {
       if(this.state.editing) {
           return this.renderForm();
       } else  {
           return this.renderNormal();
       }
    }
});

var Board = React.createClass({
    
    getInitialState: function() {
        return {
            comments: [
                'I like bacon',
                'Want to get ice cream?',
                'Ok, we have enough comments now'
            ]
        };
    },

    render: function() {
        return(
            <div className="board">
                {
                    this.state.comments.map(function(text, index) {
                        return(<Comment key={index}>{text}</Comment>);
                    })
                }
            </div>
        );
    }
});

ReactDOM.render(
    <Board />,
    document.getElementById('main')
);

/*ReactDOM.render(
    <CheckBox />,
    document.getElementById('main')
);
    */





