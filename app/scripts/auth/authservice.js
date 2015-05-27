(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .factory('authservice', authservice);

  /* @ngInject */
  function authservice($http, errorservice, $location, DATA_URL) {

    var service = {
      login: login,
      splitName: splitName,
      info: info,
      token: token,
      fillData: fillData
    };

    return service;

    function login(user) {
      return $http.post(DATA_URL + 'login/', user)
        .success(complete)
        .error(failed);
    }

    function info() {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.get(DATA_URL + 'me/', options)
        .success(complete)
        .error(failed);
    }

    function fillData(user) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.post(DATA_URL + 'onboard-competitor/', user, options)
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
      console.log(response);
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
