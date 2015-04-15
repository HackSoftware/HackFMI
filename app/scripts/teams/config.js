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
        controllerAs: 'vm'
      })
    }
})();
