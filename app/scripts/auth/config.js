(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .config(configure);
  //console.log(angular.module('hackfmiApp.auth'));

  configure.$inject = ['$stateProvider'];

  /* @ngInject */
  function configure($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/auth-main.html',
        data: {
          permissions: {
            only: ['anonymous'],
            redirectTo: 'teamfind'
          }
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/auth-register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm',
        resolve: {
          skills: skillsPrepService,
          status: getStatus
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/auth-login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('activate-msg', {
        templateUrl: 'views/auth-activate.html'
      })
      .state('activate', {
        url: '/activate/:uid/:token',
        controller: 'ActivateCtrl',
        controllerAs: 'vm',
        templateUrl: 'views/auth-activate-success.html'
      })
      .state('resetpassword', {
        url: '/resetpassword',
        templateUrl: 'views/auth-resetpassword.html',
        controller: 'resetPasswordCtrl',
        controllerAs: 'vm'
      })
      .state('resetpassword-success', {
        templateUrl: 'views/auth-resetpassword-success.html'
      })
      .state('setnewpassword', {
        url: '/reset-confirm/:uid/:token',
        templateUrl: 'views/auth-setnewpassword.html',
        controller: 'setNewPasswordCtrl',
        controllerAs: 'vm'
      })
      .state('setnewpassword-success', {
        templateUrl: 'views/auth-setnewpassword-success.html'
      })
      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      });
  }
  function skillsPrepService(dataservice) {
    return dataservice.getSkills();
  }
  function getStatus(authservice) {
    return authservice.info();
  }

})();
