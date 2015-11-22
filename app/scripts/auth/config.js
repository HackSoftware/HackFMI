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
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm',
        data: {
          permissions: {
            only: ['anonymous'],
            redirectTo: 'teamfind.notification'
          }
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
        data: {
          permissions: {
            only: ['logged'],
            redirectTo: 'teamfind.notification'
          }
        },
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
