(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('RegisterCtrl', Register);

  function Register($q, dataservice) {
    /*jshint validthis: true */
    var vm = this;

    vm.skills = [];

    activate();

    function activate() {
      console.log('in activate');
      
      return getSkillsC()
    }

    function getSkillsC() {
      return dataservice.getSkills()
        .then(function(data) {
          console.log(data);
        })
    }
  }
})();
