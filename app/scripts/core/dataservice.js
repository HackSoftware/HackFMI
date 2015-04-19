(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($http, $location, DATA_URL) {

    var service = {
      getSkills: getSkills,
    };

    return service;

    function getSkills() {
      return $http.get('http://localhost:8000/hackfmi/api/skills/')
        .then(getSkillsComplete)
        .catch(getSkillsFailed);

      function getSkillsComplete(response) {
        return response.data;
      }

      function getSkillsFailed(error) {
        return error;
      }
    }
  }
})();
