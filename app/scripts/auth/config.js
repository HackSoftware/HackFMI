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
        templateUrl: 'views/auth-main.html'
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
  }
  function skillsPrepService(dataservice) {
    return dataservice.getSkills();
  }
  
})();
