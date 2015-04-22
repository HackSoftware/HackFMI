(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.teams')
    .controller('TeamEditCtrl', TeamEditCtrl);
  
  function TeamEditCtrl($state, technologies, myteam, teamservice) {
    var vm = this;

    vm.myteam = myteam;
    vm.technologies = technologies;
    //console.log(vm.myteam);

    vm.submitForm = submitForm;

    function submitForm(isValid) {
      var teamData = {
        idea_description: vm.myteam.idea_description,
        repository: vm.myteam.repository,
        need_more_members: vm.myteam.need_more_members,
        technologies: vm.myteam.technologies,
        members_needed_desc: vm.myteam.members_needed_desc
      };
      console.log(teamData);
      teamservice.edit(vm.myteam.id, teamData);
      //$state.go('myteam');
    }
  };
})();
