(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .config(configure);

  function configure ($stateProvider) {
    $stateProvider
      .state('teamfind', {
        url: '/teamfind',
        templateUrl: 'views/teams-teamfind.html',
        controller: 'TeamFindCtrl',
        controllerAs: 'vm',
        resolve: {
          teams: teamsPrepService
        }
      })
      .state('teamadd', {
        url: '/teamadd',
        templateUrl: 'views/teams-teamadd.html',
        controller: 'TeamAddCtrl',
        controllerAs: 'vm',
        resolve: {
          technologies: techPrepService
        }
      });
    
    function teamsPrepService(teamservice) {
      return teamservice.getTeams();
    }
    function techPrepService(dataservice) {
      return dataservice.getSkills();
    }
  }
})();
