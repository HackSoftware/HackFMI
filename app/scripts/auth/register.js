(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('RegisterCtrl', Register);

  //Register.$inject = ['skills', 'status','authservice', 'errorservice', '$state'];

  function Register(skills, status, authservice, errorservice, navbar, $state) {
    /*jshint validthis: true */
    var vm = this;
    vm.logged = authservice.token();
    vm.smenu = [];
    if(vm.logged == true) {
      vm.smenu = navbar.anonymous();
    };


    vm.navf = function(action) {
      $state.go(action);
    };
    
    vm.status = status;
    vm.skills = skills;
    console.log(vm.status);
    vm.register = register;
    vm.selectedSkills = selectedSkills;
    vm.user = {};
    vm.user.known_skills = [];
    vm.errorService = errorservice;

    // vm.isLeader = authservice.isLeader();
    // console.log(vm.isLeader);
    
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
