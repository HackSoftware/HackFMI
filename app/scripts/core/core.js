(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.core')
    .controller('HomeCtrl', HomeCtrl);
  
  function HomeCtrl(season, navbar) {
    var vm = this;
    vm.menu = navbar.anonymous();
    vm.season = season;
    console.log(vm);
    
    activate();
    
    function activate() {
    };
  };
})();
