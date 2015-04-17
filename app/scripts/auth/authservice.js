(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .factory('authservice', authservice);

  /* @ngInject */
  function authservice($http, errorservice, $location, $q, DATA_URL) {

    var service = {
      login: login,
      register: register,
      resetPassword: resetPassword,
      setNewPassword: setNewPassword,
    };

    return service;

    function login(user) {
      return $http.post('http://localhost:8000/hackfmi/api/login/', user)
        .then(complete)
        .catch(failed);
    }

    function register(user) {
      return $http.post('http://localhost:8000/hackfmi/api/register/', user)
        .then(complete)
        .catch(failed);
    }

    function resetPassword(email) {
      return $http.post('http://localhost:8000/hackfmi/api/password_reset/', email)
        .then(complete)
        .catch(failed);
    }

    function setNewPassword(data) {
      return $http.post('http://localhost:8000/hackfmi/api/password_reset_confirm/', data)
        .then(complete)
        .catch(failed);
    }

    

    function complete(response) {
      return response;
    }

    function failed(error) {
      var finalError = [];
      for (var er in error.data) {
        finalError.push(error.data[er][0]);
      }
      errorservice.setError(finalError);
      console.log(error);
      return error;
    }
  }
})();
