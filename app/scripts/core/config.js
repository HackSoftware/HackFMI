(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .constant("DATA_URL", "https://data.hackbulgaria.com/hackfmi/api/")
    .config(configure);

  function configure () {
  }
})();
