(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .factory('teamservice', teamservice);

  /* @ngInject */
  function teamservice($http, $location, $q, DATA_URL) {

    var service = {
      getTeams: getTeams,
    };

    return service;

    function getTeams() {
      console.log(DATA_URL);
      return $http.get('http://localhost:8000/hackfmi/api/teams/')
        .then(getTeamsComplete)
        .catch(getTeamsFailed);

      function getTeamsComplete(response) {
        console.log(response);
        return response;
      }

      function getTeamsFailed(error) {
        console.log(error);
        return error;
      }
    }
  }
})();
