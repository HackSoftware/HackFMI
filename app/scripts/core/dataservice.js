(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($http, $location, $q, DATA_URL) {

    var service = {
      getSkills: getSkills,
    };

    return service;

    function getSkills() {
      return $http.get(DATA_URL + 'skills/')
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
