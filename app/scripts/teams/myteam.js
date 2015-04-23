(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.teams')
    .controller('MyTeamCtrl', MyTeamCtrl);
  
  function MyTeamCtrl($state, myteam, teamservice) {
    var vm = this;
    vm.leave = leave;

    function leave() {
      var confirmed = confirm("Сигурен ли си, че искаш да напуснеш този отбор!");
      if (confirmed) {
        teamservice.leaveTeam()
        .success(function() {
          $state.go('findteam');
        });
      }
    }
  };
})();
