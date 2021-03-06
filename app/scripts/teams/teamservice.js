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
      editTeam: editTeam,
      leaveTeam: leaveTeam,
      leader: leader,
      concatenate: concatenate,
      getTeamsPublic: getTeamsPublic
    };

    return service;

    function getTeams() {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.get(DATA_URL + 'teams/', options)
        .success(complete)
        .error(failed);
    };

    function registerTeam(data) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.post(DATA_URL + 'teams/', data, options)
        .success(function(data) {
        })
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
        return member.current_teammembership_set[0].is_leader == true;
      })[0];
    }

    function concatenate(array) {
      var names = array.map(function(elem){
        return elem.name;
      }).join(', ');
      return names;
    };

    function getMyTeam(team) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }},
          teamId = team.id;
      return $http.get(DATA_URL + 'teams/' + teamId + '/', options);
    }

    function editTeam(teamId, data) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.patch(DATA_URL + 'teams/' + teamId + '/', data, options);
    };

    function leaveTeam() {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      var data = {};
      return $http.post(DATA_URL + 'leave-team/', data, options)
        .success(complete)
        .error(failed);
    }

    function getTeamsPublic() {
      return $http.get(DATA_URL + 'public-teams/');
    };

    function complete(response) {
      return transformData(response);
    }

    function failed(error) {
      console.log(error);
      return error;
    }
  }
})();
