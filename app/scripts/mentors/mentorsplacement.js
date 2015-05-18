(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.mentors')
    .controller('MentorsScheduleCtrl', MentorsScheduleCtrl);
  
  function MentorsScheduleCtrl(schedule, $sce) {
    var vm = this;
    
    vm.html = $sce.trustAsHtml(schedule);
    
    activate();
    
    function activate() {
      
    };
  };
})();
