(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .controller('TeamFindCtrl', TeamFind);

  function TeamFind(teams, navbar) {
    /*jshint validthis: true */
    var vm = this;
    vm.teams = teams.data;
    
    activate();

    function activate() {
    }
  }
})();
