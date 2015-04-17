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
      return authservice.login(vm.user)
        .then(function(data) {
        })
    }
  }
})();
