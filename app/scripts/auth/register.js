(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('RegisterCtrl', Register);

<<<<<<< HEAD
  Register.$inject = ['skills', 'authservice', 'errorservice', '$state'];
=======
>>>>>>> f812607a6fd99c078dbe04a80a7a069dbcd0c1ed
  function Register(skills, authservice, errorservice, $state) {
    /*jshint validthis: true */
    var vm = this;

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
          })
          .error(function(error) {
            console.log(error);
          });
      }
    }

    function selectedSkills(skills) {
      return skills.length > 0;
    }
  }
})();
