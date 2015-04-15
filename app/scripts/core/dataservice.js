(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($http, $location, $q) {

    var service = {
      getSkills: getSkills,
    };

    return service;

    function getSkills() {
      return $http.get('/api/maa')
        .then(getSkillsComplete)
        .catch(getSkillsFailed);

      function getSkillsComplete(response) {
        return response;
      }

      function getSkillsFailed(error) {
        return error;
      }
    }
  }
})();
