(function() {
  'use strict';

  var mentors = angular.module('hackfmiApp.mentors');


  mentors.config(configure);

  /* @ngInject */
  function configure ($stateProvider) {
    $stateProvider
      .state('showmentors', {
        url: '/mentors',
        templateUrl: 'views/mentors-showmentors.html',
        controller: 'ShowMentorsCtrl',
        controllerAs: 'vm',
        resolve: {
          mentors: mentorsPrepService
        }
      })
      .state('pickmentors', {
        url: '/pickmentors',
        templateUrl: 'views/mentors-pickmentors.html',
        controller: 'PickMentorsCtrl',
        controllerAs: 'vm',
        resolve: {
          mentors: mentorsPrepService
        },
        data: {
          permissions: {
            only: ['leader'],
            redirectTo: 'teamfind'
          }
        }
      });
  }

  function mentorsPrepService(mentorservice) {
    return mentorservice.getMentors()
      .then(function(response) {
        return response.data;
      });
  }
})();
