(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.teams')
    .controller('TeamAddCtrl', TeamAdd);
  
  function TeamAdd(technologies, errorservice) {
    var vm = this;
    vm.technologies = technologies;
    console.log(vm.technologies);
    vm.addTeam = addTeam;
    vm.selectedTechnologies = selectedTechnologies;
    vm.team = {};
    vm.team.technologies = [];
    vm.error = errorservice;

    function addTeam() {
      console.log(vm.team);
    }

    function selectedTechnologies(technologies) {
      return technologies.length > 0;
    }
  }
})();
