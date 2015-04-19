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
      return $http.get(DATA_URL + 'teams/')
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
