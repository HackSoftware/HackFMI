(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .config(configure);

  function configure ($stateProvider) {
    $stateProvider
      .state('showmentors', {
        url: '/mentors',
        templateUrl: 'views/mentors-showmentors.html',
        controller: 'ShowMentorsCtrl',
        controllerAs: 'vm',
        resolve: {
          mentors: mentorsPrepService
        },
        data: {
          permissions: {
            only: ['leader', 'inteam', 'notinteam', 'anonymous'],
            redirectTo: 'pickmentors'
          }
        }
      })
      .state('pickmentors', {
        url: '/pickmentors',
        templateUrl: 'views/mentors-pickmentors.html',
        controller: 'PickMentorsCtrl',
        controllerAs: 'vm',
        resolve: {
          mentors: mentorsPrepService,
          myTeam: myTeam
        },
        data: {
          permissions: {
            only: ['leader'],
            redirectTo: 'showmentors'
          }
        }
      })
      .state('schedule', {
        url: '/schedule',
        templateUrl: 'views/mentors-schedule.html',
        controller: 'scheduleCtrl',
        controllerAs: 'vm',
        resolve: {
          dataFull: data
        }
      });
  }

  function data(mentorservice) {
    return mentorservice.mentorsSchedule()
      .then(function(response) {
        return response;
      });
  }
  
  function mentorsPrepService(mentorservice) {
    return mentorservice.getMentors()
      .then(function(response) {
        return response.data;
      });
  };

  function myTeam(authservice, teamservice) {
    return authservice.info()
      .then(function(response) {
        var tid = response.data.teammembership_set[0].team;
        return teamservice.getMyTeam(tid)
          .then(function(response) {
            return response.data[0];
          });
      });
  };

})();
