(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.teams')
    .controller('TeamsPublicCtrl', TeamsPublicCtrl);
  
  function TeamsPublicCtrl($state, teams) {
    var vm = this;
    vm.teams = teams;
    
    activate();
    
    function activate() {
      
    };
  };
})();
