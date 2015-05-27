(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .config(configure);

  configure.$inject = ['$stateProvider'];

  /* @ngInject */
  function configure($stateProvider) {
    $stateProvider
      .state('register', {
        controller: function($window, $location) {
          var url = $location.$$host;
          var port = $location.$$port;
          $window.location.href = 'http://localhost:9001/#/register/' + url + ':' + port;
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/auth-login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm',
        data: {
          permissions: {
            only: ['anonymous'],
            redirectTo: 'teamfind.notification'
          }
        }
      })
      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl',
        data: {
          permissions: {
            except: ['anonymous'],
            redirectTo: 'login'
          }
        }
      })
      .state('onboard', {
        url: '/data',
        controller: 'OnboardCtrl',
        controllerAs: 'vm',
        templateUrl: 'views/auth-onboard.html',
        resolve: {
          skills: skillsPrep
        }
      });

    function skillsPrep(dataservice) {
      return dataservice.getSkills()
        .then(function(response) {
          console.log(response);
          return response;
        });
    }
  }
})();
