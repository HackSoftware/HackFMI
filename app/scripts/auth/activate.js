(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.auth')
    .controller('ActivateCtrl', ActivateCtrl);
  
  function ActivateCtrl($stateParams, $state, authservice) {
    var vm = this;
    vm.data = $stateParams;
    
    activate();
    
    function activate() {
      authservice.activate(vm.data)
        .then(function(data) {
          localStorage.setItem('token', data.auth_token);
          $state.go('teamfind');
        });
    };
  };
})();
