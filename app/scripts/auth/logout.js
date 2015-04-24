(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('LogoutCtrl', LogoutCtrl);

  function LogoutCtrl($state, authservice) {
    var vm = this;

    activate();

    function activate() {
      localStorage.removeItem('token');
      //send smthing
      $state.go('login');
    };
  };
})();
