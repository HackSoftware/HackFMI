(function() {
  'use strict'

  angular
    .module('hackfmiApp.auth')
    .controller('RegisterCtrl', Register);

  function Register($state, navbar, dataservice) {
    var vm = this;
    dataservice
      .getSeason()
      .then(function(response) {
        vm.season = response.data[0];
        console.log(vm.season);
      });
    vm.smenu = navbar.anonymous();
  }
}());
