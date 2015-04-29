(function() {
  'use strict';

  angular
    .module('hackfmiApp', [
      'ngSanitize',
      'ngAnimate',
      'ui.router',
      'checklist-model',
      'hackfmiApp.mentors',
      'hackfmiApp.auth',
      'hackfmiApp.widgets',
      'hackfmiApp.core',
      'hackfmiApp.teams',
      'hackfmiApp.invitations',
      'permission'
    ])
    .value('seasonData', {
      number: null,
      min_team_members_count: null,
      max_team_members_count: null
    })
    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    })
    .run(function (Permission, authservice, teamservice) {

      

      Permission.defineRole('anonymous', function (stateParams) {
        if (localStorage.length == 0) {
          return true;
        }
        return false;
      });

      Permission.defineRole('leader', function (stateParams) {
        if(localStorage.length > 0) {
          return authservice.info()
            .then(function (response) {
              if (response.data.teammembership_set.length == 0) {
                return false;
              }

              if (response.data.teammembership_set[response.data.teammembership_set.length - 1].is_leader === true) {
                return true;
              }
              return false;
            });
        }
        return false;
      });

      Permission.defineRole('notinteam', function (stateParams) {
        if(localStorage.length > 0) {
          return authservice.info()
            .then(function (response) {
              if (response.data.teammembership_set.length == 0) {
                return true;
              }
              return false;
            });
        }
        return false;
      });

      Permission.defineRole('inteam', function (stateParams) {
        if(localStorage.length > 0) {
          return authservice.info()
            .then(function (response) {
              if (response.data.teammembership_set.length > 0) {
                return true;
              }
              return false;
            });
        }
        return false;
      });
    });
})();
