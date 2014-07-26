'use strict';

var React = require('react');

var Display = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Your Current Workout</h3>
        <p>
          <span className='label'>Exercise: </span>
          <span className='value'>{this.props.exercise}</span>
        </p>
        <p>
          <span className='label'>Reps: </span>
          <span className='value'>{this.props.reps}</span>
        </p>
      </div>
    );
  }
});

module.exports = Display;
