(function() {
  'use strict';

  var core = angular.module('hackfmiApp.auth');


  core.config(configure);

  /* @ngInject */
  function configure ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/auth-main.html',
        // data: {
        //   permissions: {
        //     only: ['anonymous'],
        //     redirectTo: 'teamfind.notification'
        //   }
        // }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/auth-register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm',
        resolve: {
          skills: skillsPrepService
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/auth-login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
    }

  function skillsPrepService(dataservice) {
    return dataservice.getSkills();
  }
})();
