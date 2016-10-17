/*import React from 'react';
import ReactDOM from 'react-dom';
*/
var React = require('react');
var ReactDOM = require('react-dom');



var CheckBox = React.createClass({
       

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
      
  }

  
});

ReactDOM.render(
    <CheckBox />,
    document.getElementById('main')
);
    





