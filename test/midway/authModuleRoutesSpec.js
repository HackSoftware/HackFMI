describe("Midway: Testing Routes", function() {

  var $rootScope;
  var $scope;
  var $state;
  var injector;
    
  beforeEach(module('hackfmiApp.auth'));

  beforeEach(inject(function ($injector) {
    injector = $injector;
    $state = $injector.get('$state');
    $rootScope = $injector.get('$rootScope');
    vm = $rootScope.$new();
  }));
  
  describe("Auth module routes:", function() {
    var cfg;

    it('Home state should have the right configuration', function() {
      var state = 'home';
      cfg = $state.get(state);
      expect(cfg.name).to.equal('home');
      expect(cfg.url).to.equal('/');
      expect(cfg.templateUrl).to.equal('views/auth-main.html');
      expect(cfg.controller).to.equal(undefined);
      expect($state.href(state)).to.equal('#/');
    });

    it("Register state should have the right config", function() {
      var state = 'register';
      cfg = $state.get(state);
      expect(cfg.name).to.equal('register');
      expect(cfg.url).to.equal('/register');
      expect(cfg.templateUrl).to.equal('views/auth-register.html');
      expect(cfg.controller).to.equal('RegisterCtrl');
      expect(cfg.controllerAs).to.equal('vm');
      expect($state.href(state)).to.equal('#/register');
    });

    it("Register state should resolve data corectly", function() {
      //TODO
    });
  });
});
