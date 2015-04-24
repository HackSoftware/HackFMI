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
            except: ['leader'],
            redirectTo: 'teamfind.notification'
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
            redirectTo: 'teamfind.notification'
          }
        }
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
