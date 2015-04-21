(function() {
  'use strict';

  var teams = angular.module('hackfmiApp.teams');


  teams.config(configure);

  /* @ngInject */
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
          skills: skillsPrepService
        }
      });
  }
  function teamsPrepService(teamservice) {
    return teamservice.getTeams();
  }
  function skillsPrepService(dataservice) {
    return dataservice.getSkills();
  }
})();
