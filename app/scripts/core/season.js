(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.core')
    .controller('seasonCtrl', seasonCtrl);
  
  function seasonCtrl(dataservice) {
    var vm = this;
    vm.smthing = "lil";
    
    dataservice.getSeason()
      .then(function(response) {
        vm.season = response.data[0];
        console.log(vm.season);
      });
  };
})();
