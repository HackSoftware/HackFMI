(function() {
  'use strict';

  var core = angular.module('hackfmiApp.core');

  core.constant("DATA_URL", "http://data.hackbulgaria.com/hackfmi/api/");


  core.config(configure);

  /* @ngInject */
  function configure () {
  }
})();
