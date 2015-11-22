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
      activate: activate,
      resetPassword: resetPassword,
      setNewPassword: setNewPassword,
      splitName: splitName,
      info: info,
      token: token
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

    function activate(data) {
      return $http.post(DATA_URL + 'activate/', data);
    }

    function resetPassword(email) {
      return $http.post(DATA_URL + 'password-reset/', email)
        .success(complete)
        .error(failed);
    }

    function setNewPassword(data) {
      return $http.post(DATA_URL + 'password-reset-confirm/', data)
        .success(complete)
        .error(failed);
    }

    function info() {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.get(DATA_URL + 'me/', options)
        .success(complete)
        .error(failed);
    }

    function token() {
      if(angular.isDefined(localStorage.token)) {
        return true;
      }
      else {
        return false;
      }
    };

    function splitName(name) {
      var fullName = name.split(' ');
      fullName = fullName.filter(Boolean);
      return fullName;
    }

    function complete(response) {
      return response;
    }

    function failed(error, status) {
      var finalError = [];
      for (var er in error) {
        finalError.push(error[er][0]);
      }
      errorservice.setError(finalError);
      return error;
    };
  }
})();
