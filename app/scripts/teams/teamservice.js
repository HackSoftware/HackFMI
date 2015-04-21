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
      transformData: transformData
    };

    return service;

    function getTeams() {
       var options = { headers: { 'Authorization': 'Token ' + '25d1eb1bb5b7cfdae16a273cb1cba54e0c81e1aa' }};
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
        //team.id = team.members[0].teammembership_set[0].team;
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
    
    function complete(response) {
      //console.log(transformData(response));
      return transformData(response);
    }

    function failed(error) {
      console.log(error);
      return error;
    }
  }
})();
