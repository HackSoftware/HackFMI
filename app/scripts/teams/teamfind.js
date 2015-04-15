(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .controller('TeamFindCtrl', TeamFind);

  function TeamFind($q, teamservice) {
    /*jshint validthis: true */
    var vm = this;


    activate();

    function activate() {
      return getTeams()
    }

    function getTeams() {
      return teamservice.getTeams()
        .then(function(data) {
          console.log(data);
        })
    }
  }
})();
