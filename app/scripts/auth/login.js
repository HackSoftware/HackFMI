(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('LoginCtrl', Login);

  function Login(errorservice, $state, authservice) {
    var vm = this;
    vm.errorService = errorservice;
    vm.login = login;
    vm.user = {};

    function login() {
      return authservice.login(vm.user)
        .then(function(response) {
          console.log(errorservice);
          localStorage.setItem('token', response.data.auth_token);
          $state.go('teamfind');
          console.log(localStorage);
        });
      
    }
  }
})();
