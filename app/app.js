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
        return { editing: false }
    },

    edit: function () {
        /*alert('Editing comment');*/
        this.setState({ editing: true });
    },

    remove: function () {
        console.log("Removing comment");
        this.props.deleteFromBoard(this.props.index);
    },

    save: function () {
        this.props.updateCommentText(this.refs.newText.value, this.props.index)        
        this.setState({ editing: false });
    },

    renderNormal: function () {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={this.edit} className="button-primary">Edit</button>
                <button onClick={this.remove} className="button-danger">Remove</button>
            </div>
        );
    },

    renderForm: function () {
        return (
            <div className="commentContainer">
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save} className="button-success">Save</button>
            </div>
        );
    },

    render: function () {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
});

var Board = React.createClass({

    getInitialState: function () {
        return {
            comments: [
                'I like bacon',
                'Want to get ice cream?',
                'Ok, we have enough comments now',
                'alma a  fa  alatt'
            ]
        };
    },

    removeComment: function(i) {
        console.log('Removing comments: ' + i);
        var arr = this.state.comments;
        arr.splice(i,1);
        this.setState({comments: arr})
    },

    updateComment: function(newText, i) {
        console.log('Updating comment');
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments: arr});
    },
 
    eachComment: function (text, i) {
        return (
            <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
                {text}
            </Comment>
        );
    },

    render: function () {
        return (
            <div className="board">
                {this.state.comments.map(this.eachComment)}
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





