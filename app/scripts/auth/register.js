(function() {
  'use strict'

  angular
    .module('hackfmiApp.auth')
    .controller('RegisterCtrl', Register);

  function Register($state, authservice, errorservice, navbar, seasonData) {
    var vm = this;
    vm.smenu = navbar.anonymous();
  }
}());
