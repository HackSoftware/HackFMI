describe("Midway: Testing Modules", function() {
  describe("App module", function() {
    var module;
    beforeEach(function() {
      module = angular.module('hackfmiApp');
    });

    it("should be registered", function() {
      expect(module).not.to.equal(null);
    });

    describe("Dependencies", function() {
      var deps;
      var hasModule = function(module) {
        return deps.indexOf(module) >= 0;
      };

      beforeEach(function() {
        deps = module.value('hackfmiApp').requires;
      });
      
      it("should have ui.router as a dependency", function() {
        expect(hasModule('ui.router')).to.equal(true);
      });

      it("should have checklist-model as a dependency", function() {
        expect(hasModule('checklist-model')).to.equal(true);
      });
      
      it("should have hackfmiApp.auth as a dependency", function() {
        expect(hasModule('hackfmiApp.auth')).to.equal(true);
      });

      it("should have hackfmiApp.widgets as a dependency", function() {
        expect(hasModule('hackfmiApp.widgets')).to.equal(true);
      });

      it("should have hackfmiApp.core as a dependency", function() {
        expect(hasModule('hackfmiApp.core')).to.equal(true);
      });

      it("should have hackfmiApp.teams as a dependency", function() {
        expect(hasModule('hackfmiApp.teams')).to.equal(true);
      });

    });

  });

});
