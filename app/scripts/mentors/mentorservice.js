(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .factory('mentorservice', mentorservice);

  /* @ngInject */
  function mentorservice($http, $location, $q, DATA_URL) {

    var service = {
      getMentors: getMentors,
    };

    return service;

    function getMentors() {
      return $http.get(DATA_URL + 'mentors/')
        .then(getMentorsComplete)
        .catch(getMentorsFailed);

      function getMentorsComplete(response) {
        console.log(response);
        return response;
      }

      function getMentorsFailed(error) {
        console.log(error);
        return error;
      }
    }
  }
})();
