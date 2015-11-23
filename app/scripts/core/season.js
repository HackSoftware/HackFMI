(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.core')
    .controller('SeasonCtrl', SeasonCtrl);
  
  function SeasonCtrl(dataservice) {
    var vm = this;
    vm.smthing = "lil";
    
    dataservice.getSeason()
      .then(function(response) {
        console.log(response);
        vm.season = response.data[0];
      });
  };
})();
