'use strict';

var React = require('react');

var Awesome = React.createClass({
  getInitialState: function(){
    return {
      name: 'Awesomesauce'
    }
  },
  render: function(){
    return (
      <div>
        <p>You are {this.props.modifier} awesome</p>
        <p>And your name is {this.state.name}</p>
      </div>
    );
  }
});

module.exports =  Awesome;
