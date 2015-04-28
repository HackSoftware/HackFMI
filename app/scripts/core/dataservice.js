(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($http, $location, DATA_URL) {
    var service = {
      getSkills: getSkills,
      getSeason: getSeason
    };

    return service;

    function getSkills() {
      return $http.get(DATA_URL + 'skills/')
        .then(complete);
    }

    function getSeason() {
      return $http.get(DATA_URL + 'season/')
        .success(complete);
    }

    function complete(response) {
      return response.data;
    }
  }
})();
