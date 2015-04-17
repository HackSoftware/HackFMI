(function() {
  'use strict';

  var mentors = angular.module('hackfmiApp.mentors');


  mentors.config(configure);

  /* @ngInject */
  function configure ($stateProvider) {
    $stateProvider
      .state('showmentors', {
        url: '/showmentors',
        templateUrl: 'views/mentors-showmentors.html',
        controller: 'ShowMentorsCtrl',
        controllerAs: 'vm',
        resolve: {
          mentors: mentorsPrepService
        }
      })
    }

  function mentorsPrepService(mentorservice) {
    return mentorservice.getMentors();
  }
})();
