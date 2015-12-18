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
      mentorsSchedule: mentorsSchedule,
      getLeftovers: getLeftovers
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
      return $http.get(DATA_URL + 'schedule-json/')
        .then(function(response) {
          var ordered = scheduleOrder(angular.fromJson(response.data));
          var leftovers = angular.fromJson(response.data).leftovers;
          var result = {
            'tableData': ordered,
            'leftovers': leftovers
          };
          return result;
        });
    }

    function chosenMentors(result) {
      var mentors = Object.keys(result);
      return mentors;
    }

    function allSlots(result) {
      var slots = [];

      var mentors = chosenMentors(result);
      mentors.forEach(function(mentor) {
        var slotKeys = Object.keys(result[mentor]);
        slotKeys.forEach(function(slot) {
          var slotNumber = slot.substring(1);
          if(slots.indexOf(slotNumber) === -1) {
            slots.push(slotNumber);
          }
        });
      });
      
      slots.sort(function(a, b) {
        return a-b;
      });
      return slots;
    }
    
    function scheduleOrder(scheduleObj) {
      var result = scheduleObj.placed;
      var slots = allSlots(result);
      var mentors = chosenMentors(result);
      
      var tableData = [];
      slots.forEach(function(slot) {
        var obj = {
          'slot': slot
        };

        mentors.forEach(function(mentor) {
          var slotStr = "S"+slot;
          if(slotStr in result[mentor]){
            obj[mentor] = result[mentor][slotStr];
          }
          else {
            obj[mentor] = '-';
          }
        });
        tableData.push(obj);
      });
      return {'data': tableData, 'mentors': mentors};
    }

    function getLeftovers(scheduleObj) {
      return scheduleObj.leftovers;
    }

    function pickMentor(mentorId, teamId) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};

      return $http.put(DATA_URL + 'assign-mentor/', { id: mentorId, team_id: teamId }, options)
        .then(pickMentorComplete)
        .catch(pickMentorFailed);

      function pickMentorComplete(response) {
        return response;
      }

      function pickMentorFailed(error) {
        return error;
      }
    }

    function unpickMentor(mentorId, teamId) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};

      return $http.post(DATA_URL + 'assign-mentor/', { id: mentorId, team_id: teamId }, options)
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
