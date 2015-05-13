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
      
    };
  };
})();
