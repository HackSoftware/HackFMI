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
        console.log(response);
        return response;
      }

      function getSkillsFailed(error) {
        console.log(error);
        return error;
      }
    }
  }
})();
