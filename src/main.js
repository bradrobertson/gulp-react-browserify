'use strict';

var React   = require('react'),
    Form    = require('./views/form.jsx');

function render () {
  React.renderComponent(
    Form(null),
    document.getElementById('main')
  );
}

render();
setInterval(render, 3000);
