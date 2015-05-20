(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .controller('PickMentorsCtrl', PickMentors);

  function PickMentors($q, $sce, mentorservice, teamservice, mentors, myTeam, navbar, canPickMentors) {
    var vm = this;
    vm.team = myTeam;
    vm.canPick = canPickMentors;
    vm.menu = navbar.leader();
 
    
    vm.mentors = mentors.map(function(obj) {
      obj.description = $sce.trustAsHtml(obj.description);
      return obj;
    });

    vm.addMentor = function(mentorId) {
      console.log(mentorId);
      mentorservice.pickMentor(mentorId);
      vm.team.mentors.push(mentorId);
    };

    vm.removeMentor = function(mentorId) {
      mentorservice.unpickMentor(mentorId);
      var index = vm.team.mentors.indexOf(mentorId);
      if (index > -1) {
        vm.team.mentors.splice(index, 1);
      }
    };
  }
})();
