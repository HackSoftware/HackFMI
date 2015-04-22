(function() {
  'use strict';

  angular
    .module('hackfmiApp', [
      // 'ngAnimate',
      // 'ngCookies',
      // 'ngResource',
      // 'ngSanitize',
      // 'ngTouch',
      'ui.router',
      'checklist-model',
      'hackfmiApp.mentors',
      'hackfmiApp.auth',
      'hackfmiApp.widgets',
      'hackfmiApp.core',
      'hackfmiApp.teams'
    ])
  //   .config(configure)
  //   .run(function($rootScope, $templateCache) {
  //     $rootScope.$on('$viewContentLoaded', function() {
  //       $templateCache.removeAll();
  //     });
  //   });

  // function configure($stateProvider) {
  //   $stateProvider
  //     .state('transition', {
  //       url: 'transition?destination',
  //       controller: function ($state, $stateParams) {
  //         $state.go($stateParams.destination);
  //       }
  //     });
  // }
})();
