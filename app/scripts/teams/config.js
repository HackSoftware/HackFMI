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
      })
      .state('teamedit', {
        url: '/teamedit',
        templateUrl: 'views/teams-teamedit.html',
        controller: 'TeamEditCtrl',
        controllerAs: 'vm',
         resolve: {
           technologies: techPrepService,
           myteam: myTeamId
         }
      });

    function myTeamId(authservice, teamservice) {
      var tid = authservice.info()
          .then(function(response) {
            return response.data.teammembership_set[0].team;
          });
      return teamservice.getMyTeam(tid)
        .then(function(response) {
          console.log(response.data[0]);
          return response.data[0];
        });
    };

    function teamsPrepService(teamservice) {
      return teamservice.getTeams();
    }
    function techPrepService(dataservice) {
      return dataservice.getSkills();
    }
  }
})();
