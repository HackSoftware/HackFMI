(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .factory('mentorservice', mentorservice);

  /* @ngInject */
  function mentorservice($http, $location, $q, DATA_URL) {

    var service = {
      getMentors: getMentors,
      pickMentor: pickMentor,
      unpickMentor: unpickMentor,
      mentorsSchedule: mentorsSchedule
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

    function mentorsSchedule() {
      return $http.get(DATA_URL + 'schedule/')
        .then(function(response) {
          console.log(response.data);
          return response.data;
        });
    }

    function pickMentor(mentorId) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};

      return $http.put(DATA_URL + 'assign_mentor/', { id: mentorId }, options)
        .then(pickMentorComplete)
        .catch(pickMentorFailed);

      function pickMentorComplete(response) {
        return response;
      }

      function pickMentorFailed(error) {
        return error;
      }
    }

    function unpickMentor(mentorId) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};

      return $http.post(DATA_URL + 'assign_mentor/', { id: mentorId }, options)
        .then(unpickMentorComplete)
        .catch(unpickMentorFailed);

      function unpickMentorComplete(response) {
        return response;
      }

      function unpickMentorFailed(error) {
        return error;
      }
    }
  }
})();
