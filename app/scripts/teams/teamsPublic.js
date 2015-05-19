(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.teams')
    .controller('TeamsPublicCtrl', TeamsPublicCtrl);
  
  function TeamsPublicCtrl($state, teams, navbar) {
    var vm = this;
    vm.teams = teams;
    vm.menu = navbar.anonymous();
    
    activate();
    
    function activate() {
    };
  };
})();
