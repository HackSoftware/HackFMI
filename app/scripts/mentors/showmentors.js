(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .controller('ShowMentorsCtrl', ShowMentors);

  function ShowMentors($sce, mentorservice, mentors, navbar, authservice) {
    var vm = this;
    if(localStorage.length === 0) {
      vm.menu = navbar.anonymous();
    }
    else {
      authservice.info()
        .then(function(response) {
          if(response.data.current_teammembership_set.length == 0 ) {
            vm.menu = navbar.notinteam();
          }
          else {
            vm.menu = navbar.inteam();
          }
        });
    }

    vm.mentors = mentors.map(function(obj) {
      obj.description = $sce.trustAsHtml(obj.description);
      return obj;
    });
  }
})();
