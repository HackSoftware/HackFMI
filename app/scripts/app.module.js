(function() {
  'use strict';

  angular
    .module('hackfmiApp', [
      // 'ngAnimate',
      // 'ngCookies',
      // 'ngResource',
      'ngSanitize',
      // 'ngTouch',
      'ui.router',
      'checklist-model',
      'hackfmiApp.mentors',
      'hackfmiApp.auth',
      'hackfmiApp.widgets',
      'hackfmiApp.core',
      'hackfmiApp.teams',
      'permission'
    ])
    .run(function (Permission, authservice, $q) {

      Permission.defineRole('anonymous', function (stateParams) {
        if (localStorage.length == 0) {
          return true;
        }
        return false;
      });

      Permission.defineRole('leader', function (stateParams) {
        return authservice.info()
          .then(function (response) {
            if (response.data.teammembership_set.length == 0) {
              return false;
            }

            if (response.data.teammembership_set[0].is_leader === true) {
              return true;
            }
            return false;
        });
      });

      Permission.defineRole('notinteam', function (stateParams) {
        return authservice.info()
          .then(function (data) {
            if (data.data.teammembership_set.length == 0) {
              return true
            }
            return false
          });
      });

      Permission.defineRole('inteam', function (stateParams) {
        return authservice.info()
          .then(function (data) {
            if (data.data.teammembership_set) {
              return true;
            }
            return false;
          });
      });

    });
})();
