(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .controller('TeamCtrl', TeamCtrl);

  function TeamCtrl($state, me, team, teamservice, navbar, invitations) {
    var vm = this;
    vm.leave = leave;
    vm.team = team;
    vm.me = me;

    vm.leader = teamservice.leader(vm.team.members);
    vm.techNames = teamservice.concatenate(vm.team.technologies_full);

    if(me.current_teammembership_set[0].is_leader == true) {
      vm.menu = navbar.leader();
    }
    else {
      vm.menu = navbar.inteam();
    }

    vm.error = {};
    vm.success = {};
    vm.submitForm = function(){
      invitations.sendInvite(vm.user)
        .success(function(data) {
          console.log(data.message);
          vm.success['message'] = data.message;
          vm.success['show'] = true;
          vm.error['show'] = false;
        })
        .error(function(data) {
          vm.error['message'] = data.error;
          vm.success['show'] = false;
          vm.error['show'] = true;
        })
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
