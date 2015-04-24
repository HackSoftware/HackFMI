(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .constant("DATA_URL", "http://data.hackbulgaria.com/hackfmi/api/")
    .config(configure);

  function configure () {
  }
})();
