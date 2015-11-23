(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.auth')
    .controller('OnboardCtrl', OnboardCtrl);
  
  function OnboardCtrl(skills, authservice, $state) {
    var vm = this;
    vm.skills = skills;
    vm.missingData = missingData;
    vm.selectedSkills = selectedSkills;
    vm.user = {};
    vm.user.known_skills = [];
    console.log(vm.skills);
    
    function missingData(isFormValid) {
      if(isFormValid) {
        authservice.fillData(vm.user)
          .success(function(data) {
            console.log('yeeey');
            $state.go('teamfind.notification');
          });
      }
    }
  };

  function selectedSkills(skills) {
    return skills.length > 0;
  }    
})();
