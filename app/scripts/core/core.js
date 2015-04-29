(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.core')
    .controller('HomeCtrl', HomeCtrl);
  
  function HomeCtrl(season, navbar, seasonData) {
    var vm = this;
    vm.menu = navbar.anonymous();
    vm.season = season;
    console.log(vm.season);
    
    activate();
    
    function activate() {
      seasonData.number = season.number,
      seasonData.min_team_members_count = season.min_team_members_count,
      seasonData.max_team_members_count = season.max_team_members_count
    };
  };
})();
