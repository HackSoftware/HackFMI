(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('LoginCtrl', Login);

  function Login($state, authservice, errorservice, navbar, seasonData) {
    var vm = this;
    vm.errorService = errorservice;
    vm.login = login;
    vm.user = {};
    vm.smenu = navbar.anonymous();
    console.log(seasonData.number);

    function login() {
      return authservice.login(vm.user)
        .then(function(response) {
          localStorage.setItem('token', response.data.auth_token);
          $state.go('teamfind.notification');
        });
    }
  }
})();
