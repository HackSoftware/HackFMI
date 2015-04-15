(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .factory('errorservice', errorservice);

  /* @ngInject */
  function errorservice() {

    var service = {
      errorMessage: null,
      setError: function setError(msg) {
        this.errorMessage = msg
      }
    };

    return service;
  }
})();
