describe('hackfmiApp test', function() {
  var chai = require('chai');
  var expect = chai.expect;
  var should = chai.should();
  
  beforeEach(function() {
    browser.get('http://localhost:9000/#/');
  });

  it('should show navigation', function(done) {
    //var navbar = element(by.id('main-navigation'));
    // element(by.id('main-navigation')).then(function(text) {
    //   console.log(text);
    // });

    var first = element(by.id('showmentors'));
    first.getText().then(function(text) {
      console.log(text);
      expect(text).to.equal('Ментори');
      done();
    });
  });
});
