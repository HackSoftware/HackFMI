(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .controller('TeamAddCtrl', TeamAdd);

  function TeamAdd($state, technologies, errorservice, navbar, teamservice) {
    var vm = this;
    vm.technologies = technologies;
    vm.addTeam = addTeam;
    vm.selectedTechnologies = selectedTechnologies;
    vm.team = {};
    vm.team.technologies = [];
    vm.error = errorservice;
    vm.menu = navbar.notinteam();

    function addTeam() {
      teamservice.registerTeam(vm.team)
        .then(function(response) {
          $state.go('myteam');
        });
    }

    function selectedTechnologies(technologies) {
      return technologies.length > 0;
    }
  }
})();
