(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('RegisterCtrl', Register);

  function Register(skills, season, authservice, errorservice, navbar, $state) {
    /*jshint validthis: true */
    var vm = this;

    vm.smenu = navbar.anonymous();

    vm.skills = skills;
    vm.season = season;
    vm.register = register;
    vm.selectedSkills = selectedSkills;
    vm.user = {};
    vm.user.known_skills = [];
    vm.errorService = errorservice;
    
    var now = new Date();
    vm.regEnd = new Date(vm.season.sign_up_deadline);
    vm.canRegister = true;
    
    if(now >= vm.regEnd) {
      vm.canRegister = false;
    }

    function register(isFormValid) {
      var fullName = authservice.splitName(vm.user.name);
      vm.user.first_name = fullName[0];
      vm.user.last_name = fullName[1];

      if(isFormValid) {
        authservice.register(vm.user)
          .success(function(data) {
            $state.go('activate-msg');
          });
      }
    }

    function selectedSkills(skills) {
      return skills.length > 0;
    }
  }
})();
