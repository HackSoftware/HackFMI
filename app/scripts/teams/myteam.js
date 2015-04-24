(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .controller('TeamCtrl', TeamCtrl);

  function TeamCtrl($state, me, team, teamservice, navbar) {
    var vm = this;
    vm.leave = leave;
    vm.team = team;
    vm.me = me;
    vm.leader = teamservice.leader(vm.team.members);
    vm.techNames = teamservice.concatenate(vm.team.technologies_full);

    if(me.teammembership_set[0].is_leader == true) {
      vm.menu = navbar.leader();
    }
    else {
      vm.menu = navbar.inteam();
    }

    function leave() {
      var confirmed = confirm("Сигурен ли си, че искаш да напуснеш този отбор!");
      if (confirmed) {
        teamservice.leaveTeam()
          .success(function() {
            $state.go('teamfind.notification');
          });
      }
    }
  };
})();
