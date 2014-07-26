'use strict';

var React   = require('react'),
    Awesome = require('./awesome.jsx');

var Hello = React.createClass({
  getInitialState: function(){
    return {name: 'Person I Don\'t Know', age: 20}
  },
  update: function(x, y){
    this.setState({name: x.target.value});
    console.log("state: ", this.state);
  },
  render: function(){
    return (
      <div className="poop">
        <p>
          Hello,
          <input type="text" onChange={this.update} placeholder="Enter your name" /><br />
          It is {this.props.date.toTimeString()}
        </p>
        <input type="text" value="this should never change" />
        <h1>You are THIS awesome {this.state.name}</h1>
        <h3>And you're {this.state.age} years old</h3>
        <Awesome modifier="kind of"><span>Poops</span></Awesome>
      </div>
    );
  }
});

module.exports = Hello;
