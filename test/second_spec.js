'use strict';

var expect = require('chai').expect;

var SomeModel = require('../src/models/some_model');

describe('something else', function () {
  describe('#hi', function () {
    it('outputs the arg', function () {
      var m = new SomeModel('abcdef');

      expect(m.hi()).to.equal('abcdef');
    });
  });

  describe('#HI', function () {
    it('outputs the arg', function () {
      var m = new SomeModel('abcdef');

      expect(m.HI()).to.equal('ABCDEF');
    });
  });
});
