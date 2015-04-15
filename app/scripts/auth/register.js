(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('RegisterCtrl', Register);
  
  function Register(skills) {
    /*jshint validthis: true */
    var vm = this;

    vm.skills = skills;
    vm.register = register;
    vm.selectedSkills = selectedSkills;
    vm.user = {};
    vm.user.known_skills = []
    
    function register(isFormValid) {
      vm.user.first_name = splitName(vm.user.name)[0];
      vm.user.last_name = splitName(vm.user.name)[1];

      if(isFormValid) {
        
      }
      
    }

    function splitName(name) {
      var fullName = name.split(' ');
      fullName = fullName.filter(Boolean);
      return fullName;
    }

    function selectedSkills(skills) {
      return skills.length > 0;
    }
  }
})();
