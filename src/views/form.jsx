'use strict';

var React   = require('react'),
    Display = require('./display.jsx');

var Form = React.createClass({
  handleChange: function(e){
    var data = {};
    data[e.target.name] = e.target.value
    console.log("changed state: ", data);
    this.setState(data);
  },
  getInitialState: function(){
    return {exercise: 'Burpees', reps: 100};
  },
  render: function(){
    return (
      <div>
        <h3>Change your Exercise Here:</h3>
        <label>
          Exercise: <input type="text" name="exercise" onChange={this.handleChange} value={this.state.exercise} />
        </label>
        <label>
          Reps: <input type="text" name="reps" onChange={this.handleChange} value={this.state.reps} />
        </label>
        <Display exercise={this.state.exercise} reps={this.state.reps} />
      </div>
    );
  }
});

module.exports = Form;
