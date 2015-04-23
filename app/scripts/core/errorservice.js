(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .factory('errorservice', errorservice);

  /* @ngInject */
  function errorservice() {

    var service = {
      errorMessage: null,
      setError: setError,
      clear: clear
    };

    return service;

    function setError(msg) {
      return this.errorMessage = msg;
    };
    function clear() {
      this.errorMessage = null;
    };
  }
})();
