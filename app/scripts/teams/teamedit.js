(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .controller('TeamEditCtrl', TeamEditCtrl);

  function TeamEditCtrl($state, technologies, myteam, teamservice, navbar) {
    var vm = this;

    vm.myteam = myteam;
    vm.technologies = technologies;
    vm.menu = navbar.leader();

    vm.submitForm = submitForm;

    function submitForm(isValid) {
      var teamData = {
        idea_description: vm.myteam.idea_description,
        repository: vm.myteam.repository,
        need_more_members: vm.myteam.need_more_members,
        technologies: vm.myteam.technologies,
        members_needed_desc: vm.myteam.members_needed_desc
      };
      teamservice.editTeam(vm.myteam.id, teamData);
      $state.go('myteam');
    }
  };
})();
