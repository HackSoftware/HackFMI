describe('hackfmiApp.auth login test', function() {
  var chai = require('chai');
  var expect = chai.expect;
  var should = chai.should();

  beforeEach(function() {
    browser.get('#/login');
  });

  it("should show error message - invalid email", function() {
    element(by.model('vm.user.email')).sendKeys('ha');
    element(by.model('vm.user.password')).sendKeys('test');
    element(by.buttonText('Вход')).click();
    element.all(by.css('.help-block')).get(0).isPresent().then(function(result) {
      expect(result).to.equal(true);
    });
  });

  it("should show error message - invalid credentials", function() {
    element(by.model('vm.user.email')).sendKeys('m@h.com');
    element(by.model('vm.user.password')).sendKeys('test');
    element(by.buttonText('Вход')).click();
    element.all(by.css('.help-block')).get(0).isPresent().then(function(result) {
      expect(result).to.equal(true);
    });
  });

  it("should not show error message - successful login", function() {
    element(by.model('vm.user.email')).sendKeys('m@m.com');
    element(by.model('vm.user.password')).sendKeys('123');
    element(by.buttonText('Вход')).click();
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).to.equal('/teamfind');
    });
  });
  
});
