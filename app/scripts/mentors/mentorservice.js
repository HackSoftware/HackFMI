(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .factory('mentorservice', mentorservice);

  /* @ngInject */
  function mentorservice($http, $location, $q, DATA_URL) {

    var service = {
      getMentors: getMentors,
      pickMentors: pickMentors
    };

    return service;

    function getMentors(mentorId) {
      return $http.get(DATA_URL + 'mentors/')
        .then(getMentorsComplete)
        .catch(getMentorsFailed);

      function getMentorsComplete(response) {
        return response;
      }

      function getMentorsFailed(error) {
        return error;
      }
    }

    function pickMentors(mentorId) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};

      return $http.put(DATA_URL + 'assign_mentor/', { id: mentorId }, options)
        .then(pickMentorsComplete)
        .catch(pickMentorsFailed);

      function pickMentorsComplete(response) {
        return response;
      }

      function pickMentorsFailed(error) {
        return error;
      }
    }
  }
})();
