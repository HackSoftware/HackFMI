(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    //.constant("DATA_URL", "http://data.hackbulgaria.com/hackfmi/api/")
    .constant("DATA_URL", "http://localhost:8000/hackfmi/api/")
    .config(configure);

  function configure () {
  }
})();
