describe("Midway: Testing Routes", function() {

  var rootScope;
  var scope;
  var state;
  var injector;
  var ctrl;
  var skillsMock;
  var controller;
  var authservice, errorservice;
  
  beforeEach(module('hackfmiApp.auth'));
  beforeEach(module('ui.router'));
  beforeEach(module(function ($provide) {
      skillsMock = $provide.value('skills', [{id:1, name:'skill1'}, {id:2, name: 'skill2'}]);
  }));

  beforeEach(inject(function ($injector) {
    injector = $injector;
    state = injector.get('$state');
    rootScope = injector.get('$rootScope');
    scope = rootScope.$new();
  }));

  
  
  
  describe("Auth module routes:", function() {
    var cfg;

    it('Home state should have the right configuration', function() {
      cfg = state.get('home');
      expect(cfg.name).to.equal('home');
      expect(cfg.url).to.equal('/');
      expect(cfg.templateUrl).to.equal('views/auth-main.html');
      expect(cfg.controller).to.equal(undefined);
      expect(state.href('home')).to.equal('#/');
    });

    describe("Register state", function() {
      beforeEach(inject(function ($injector) {
        controller = $injector.get('$controller');
        //new register controller
        ctrl = controller('RegisterCtrl', {
          $scope: scope,
          skills: skillsMock.$get(),
          authservice: authservice,
          errorservice: errorservice,
          $state: state
        });

      }));

      it("should have the right config", function() {
        cfg = state.get('register');
        expect(cfg.name).to.equal('register');
        expect(cfg.url).to.equal('/register');
        expect(cfg.templateUrl).to.equal('views/auth-register.html');
        expect(cfg.controller).to.equal('RegisterCtrl');
        expect(cfg.controllerAs).to.equal('vm');
        expect(state.href('register')).to.equal('#/register');
      });

      it("should load RegisterCtrl when properly when /register route is accessed", function() {
        //todo
      });
    });
  });
});
