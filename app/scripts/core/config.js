(function() {
  'use strict';

  var core = angular.module('hackfmiApp.core');

  core.constant("DATA_URL", "http://localhost:8000/hackfmi/api/");


  core.config(configure);

  /* @ngInject */
  function configure () {
  }
})();
