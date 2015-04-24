describe("Midway: Testing Auth Module", function() {
  describe("Auth Module:", function() {
    var module;
    
    beforeEach(function() {
      module = angular.module('hackfmiApp.auth');
    });

    it("should be registered", function() {
      expect(module).not.to.equal(null);
    });

    describe("Dependencies:", function() {
      var deps;
      var hasModule = function(module) {
        return deps.indexOf(module) >= 0;
      };

      beforeEach(function() {
        deps = module.value('hackfmiApp.auth').requires;
      });

      it("should have ui.router as a dependency", function() {
        expect(hasModule('ui.router')).to.equal(true);
      });
    });

  });

});
