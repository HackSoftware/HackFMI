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
          myTeam: myTeam,
          canPickMentors: canPickPrep
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

  function canPickPrep(dataservice) {
    return dataservice.getSeason()
        .then(function(response) {
          var now = new Date();
          var mentorStart = new Date(response.data[0].mentor_pick_start_date);
          var mentorEnd = new Date(response.data[0].mentor_pick_end_date);
          mentorEnd.setDate(mentorEnd.getDate() + 1);
          mentorStart.setDate(mentorStart.getDate() - 1);
          if(mentorStart <= now && mentorEnd >= now) {
            return true;
          }
          else {
            return false;
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
        return response.data.teammembership_set[0].team;
        return teamservice.getMyTeam(team)
          .then(function(response) {
            return response.data[0];
          });
      });
  };

})();
