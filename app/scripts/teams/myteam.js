(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.teams')
    .controller('TeamCtrl', TeamCtrl);
  
  function TeamCtrl($state, team, teamservice) {
    var vm = this;
    vm.leave = leave;
    vm.team = team;

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
