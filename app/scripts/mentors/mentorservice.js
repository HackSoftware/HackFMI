(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .factory('mentorservice', mentorservice);

  /* @ngInject */
  function mentorservice($http, DATA_URL) {

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
      return $http.get(DATA_URL + 'schedule_json/')
        .then(function(response) {
          var ordered = scheduleOrder(angular.fromJson(response.data));
          console.log(ordered);
          return angular.fromJson(response.data);
        });
    }

    function scheduleOrder(scheduleObj) {
      var slots = [];
      var mentors = [];
      var result = scheduleObj.placed;
      
      for(var i in result) {
        if(mentors.indexOf(i) === -1) {
          mentors.push(i);
        }
        for(var s in result[i]) {
          if(slots.indexOf(s) === -1) {
            slots.push(s);
          }
        }
      }
      slots = slots.sort();
      //console.log(slots);
      //console.log(mentors);

      var tableData = [];
      slots.forEach(function(slot) {
        var obj = {
          'slot': slot
        };

        mentors.forEach(function(mentor) {
          if(slot in result[mentor]){
            obj[mentor] = result[mentor][slot];
          }
          else {
            obj[mentor] = '-';
          }
        });
        tableData.push(obj);
      });
      
      return scheduleObj;
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
