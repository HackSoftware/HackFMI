(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('resetPasswordCtrl', resetPassword);

  function resetPassword($state, authservice) {
    var vm = this;
    vm.lostPassword = lostPassword;
    vm.userData = {};
    
    function lostPassword() {
      return authservice.resetPassword(vm.userData)
        .success(function(data) {
          console.log(data);
          $state.go('resetpassword-success');
        })
        .error(function(error) {
          console.log(error);
        });
    }
  }
})();
