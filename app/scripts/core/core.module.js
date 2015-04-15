(function() {
    'use strict';

    angular.module('hackfmiApp.core', [
        /*
         * Angular modules
         */
      'ui.router',
      'hackfmiApp.auth'


        /*
         * Our reusable cross app code modules
         */
        // 'blocks.exception', 'blocks.logger', 'blocks.router',
    ]);
})();
