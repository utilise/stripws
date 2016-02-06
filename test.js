var expect = require('chai').expect
  , stripws = require('./')

describe('stripws', function() {

  it('should strip space between tags', function() {
    expect(stripws('<a>\n  <b>')).to.be.eql('<a><b>')
  })

  it('should work with template literals', function() {
    expect(stripws(['<a>\n  <b>'])).to.be.eql('<a><b>')
  })
  
})