(function() {
  'use strict';

  angular
    .module('hackfmiApp.widgets')
    .directive('ccPwdCheck', ccPwdCheck);

  function ccPwdCheck() {
    var directive = {
      require: 'ngModel',
      link: link
    };

    return directive;

    function link(scope, element, attrs, ctrl) {
      var me = attrs.ngModel;
      var matchTo = attrs.ccPwdCheck;

      scope.$watchGroup([me, matchTo], function(value) {
        ctrl.$setValidity('pwdmatch', value[0] === value[1]);
      });
    }
  }
})();
