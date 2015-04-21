(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.teams')
    .controller('TeamAddCtrl', TeamAdd);
  
  function TeamAdd(skills) {
    var vm = this;
    vm.skills = skills; 
    activate();
    
    function activate() {
      
    };
  };
})();
