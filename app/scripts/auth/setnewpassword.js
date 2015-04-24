(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('setNewPasswordCtrl', setNewPassword);

  function setNewPassword($state, $stateParams, authservice, errorservice) {
    var vm = this;
    vm.error = errorservice;
    vm.data = $stateParams;
    vm.setNew = setNew;

    function setNew() {
      return authservice.setNewPassword(vm.data)
        .success(function() {
          errorservice.clear();
          $state.go('setnewpassword-success');
        });
    }
  }
})();
