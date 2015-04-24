(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('RegisterCtrl', Register);

  //Register.$inject = ['skills', 'status','authservice', 'errorservice', '$state'];

  function Register(skills, authservice, errorservice, navbar, $state) {
    /*jshint validthis: true */
    var vm = this;

    vm.smenu = navbar.anonymous();

    vm.skills = skills;
    vm.register = register;
    vm.selectedSkills = selectedSkills;
    vm.user = {};
    vm.user.known_skills = [];
    vm.errorService = errorservice;

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
