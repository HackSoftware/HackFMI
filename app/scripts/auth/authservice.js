(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .factory('authservice', authservice);

  /* @ngInject */
  function authservice($http, errorservice, $location, $q, DATA_URL) {

    var service = {
      login: login,
    };

    return service;

    function login(user) {
      return $http.post(DATA_URL + 'login/', user)
        .then(loginComplete)
        .catch(loginFailed);

      function loginComplete(response) {
        return response;
      }

      function loginFailed(error) {
        var finalError = [];
        for (var er in error.data) {
          finalError.push(error.data[er][0]);
        }
        errorservice.setError(finalError.join("<br>"));
        return error
      }
    }
  }
})();
