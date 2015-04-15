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

      'hackfmiApp.auth',
      'hackfmiApp.core',
      'hackfmiApp.teams'
    ]);
})();
