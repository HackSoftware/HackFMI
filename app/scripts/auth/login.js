(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('LoginCtrl', Login);

  function Login(errorservice, $state, authservice) {
    /*jshint validthis: true */
    var vm = this;
    vm.errorService = errorservice;
    vm.login = login;
    vm.user = {}

    function login() {
      console.log(vm.errorService);
      return authservice.login(vm.user)
        .then(function(response) {
          //set token and redirect
          localStorage.setItem('token', response.data.auth_token);
          $state.go('teamfind');
          console.log(localStorage);
        })
      
    }
  }
})();
