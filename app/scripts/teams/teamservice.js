(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .factory('teamservice', teamservice);

  /* @ngInject */
  function teamservice($http, $location, $q, DATA_URL) {

    var service = {
      getTeams: getTeams,
      registerTeam: registerTeam,
      transformData: transformData,
      getMyTeam: getMyTeam,
      editTeam: editTeam
    };

    return service;

    function getTeams() {
       var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.get(DATA_URL + 'teams/', options)
        .success(complete)
        .error(failed);
    };

    function registerTeam(data) {
      return $http.post(DATA_URL + 'register_team/', data)
        .success(complete)
        .error(failed);
    }

    function transformData(teams) {
      return teams.map(function(team) {
        team.techNames = concatenate(team.technologies_full);
        team.leader = leader(team.members);
        return team;
      });
    }

    function leader(members) {
      return members.filter(function(member) {
        return member.teammembership_set[0].is_leader;
      })[0];
    }
    
    function concatenate(array) {
      var names = array.map(function(elem){
        return elem.name;
      }).join(', ');
      return names;
    };

    function getMyTeam(teamId) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.get(DATA_URL + 'teams/' + teamId + '/', options);
    }

    function editTeam(teamId, data) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.patch(DATA_URL + teamId + '/', data, options)
        .success(complete)
        .error(failed);
    }
    
    function complete(response) {
      return transformData(response);
    }

    function failed(error) {
      console.log(error);
      return error;
    }
  }
})();
