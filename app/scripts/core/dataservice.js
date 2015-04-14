(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($http, $location, $q, exception, logger) {
    console.log("daa");
    var isPrimed = false;
    var primePromise;

    var service = {
      getSkills: getSkills,
    };

    return service;

    function getSkills() {
      return $http.get('/api/maa')
        .then(getSkillComplete)
        .catch(function(message) {
          // exception.catcher('XHR Failed for getAvengers')(message);
          // $location.url('/');
          console.log(message);
        });

      function getSkillComplete(data, status, headers, config) {
        console.log(data)
        return data.data[0].data.results;
      }
    }
  }
})();
