(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .controller('PickMentorsCtrl', PickMentors);

  function PickMentors($q, $sce, mentorservice, teamservice, mentors) {
    /*jshint validthis: true */
    var vm = this;
    vm.mentors = mentors.map(function(obj) {
      obj.description = $sce.trustAsHtml(obj.description);
      return obj;
    });


    vm.addMentor = function(mentorId) {
      mentorservice.pickMentors(mentorId);
    };
  }
})();
