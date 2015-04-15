(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('RegisterCtrl', Register);
  
  function Register(skills) {
    /*jshint validthis: true */
    var vm = this;

    vm.register = register;
    vm.user = {};
    
    activate();

    function activate() {
      vm.skills = skills;
    }

    function register(isFormValid) {
      console.log('in register function');
      vm.user.known_skills = [];
      vm.user.first_name = splitName(vm.user.name)[0];
      vm.user.last_name = splitName(vm.user.name)[1];
      console.log(vm.user);

    }

    function splitName(name) {
    var fullName = name.split(' ');
    fullName = fullName.filter(Boolean);
    return fullName;
    }
  }
})();
