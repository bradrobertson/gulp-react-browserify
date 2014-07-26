'use strict';

var uppercase = require('../lib/util').uppercase;

var SomeModel = function (arg) {
  this.arg = arg;
};

SomeModel.prototype.hi = function () {
  return this.arg;
};

SomeModel.prototype.HI = function () {
  return uppercase(this.arg);
};

module.exports = SomeModel;
