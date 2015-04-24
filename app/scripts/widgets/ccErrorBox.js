(function() {
  'use strict';

  angular
    .module('hackfmiApp.widgets')
    .directive('ccErrorBox', ccErrorBox);

  /* @ngInject */
  function ccErrorBox () {
    var directive = {
      templateUrl: 'views/errorBox.html',
      restrict: 'A',
      link: link
    };
    return directive;

    function link(scope, element, attrs) {
      var errorMessageAttr = attrs['errorMessage'];
      scope.errorMessage = null;

      scope.$watch(errorMessageAttr, function(newVal) {
        scope.errorMessage = newVal;
      });

      scope.clear = function() {
        scope.errorMessage = null;
      };
    }
  }
})();
