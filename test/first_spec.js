'use strict';

var expect = require('chai').expect;

describe('First spec', function () {
  it('passes', function () {
    expect(1+1).to.equal(2);
  });

  it('also passed', function () {
    expect(Math.pow(2, 4)).to.equal(16);
  });
});
