(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.mentors')
    .controller('scheduleCtrl', scheduleCtrl);
  
  function scheduleCtrl(mentorservice, navbar) {
    var vm = this;
    vm.menu = navbar.anonymous();
    
    mentorservice.mentorsSchedule()
      .then(function(response) {
        vm.data = response.placed;
        vm.leftovers = response.leftovers;
      });
  };
})();
