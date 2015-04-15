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
      'hackfmiApp.widgets',
      'hackfmiApp.core',
      'hackfmiApp.teams'
    ]);
})();
