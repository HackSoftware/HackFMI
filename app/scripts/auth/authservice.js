(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .factory('authservice', authservice);

  /* @ngInject */
  function authservice($http, errorservice, $location, DATA_URL) {

    var service = {
      login: login,
      register: register,
      resetPassword: resetPassword,
      setNewPassword: setNewPassword,
    };

    return service;

    function login(user) {
      return $http.post(DATA_URL + 'login/', user)
        .success(complete)
        .error(failed);
    }

    function register(user) {
      return $http.post(DATA_URL + 'register/', user)
        .success(complete)
        .error(failed);
    }

    function resetPassword(email) {
      return $http.post(DATA_URL + 'password_reset/', email)
        .success(complete)
        .error(failed);
    }

    function setNewPassword(data) {
      return $http.post(DATA_URL + 'password_reset_confirm/', data)
        .success(complete)
        .error(failed);
    }

    function complete(response) {
      return response;
    }

    function failed(error) {
      var finalError = [];
      console.log(error);
      for (var er in error) {
        finalError.push(error[er][0]);      
      }
      console.log(finalError);
      errorservice.setError(finalError);
      return error;
    }    
  }
})();
