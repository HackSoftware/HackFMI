(function() {
  'use strict';

  angular
    .module('hackfmiApp.auth')
    .controller('Register', Register);

  Register.$inject = ['$q', 'dataservice'];

  function Register($q, dataservice) {
    console.log("V cont")
    /*jshint validthis: true */
    var vm = this;

    vm.skills = [];

    activate();

    function activate() {
      var promises = [getSkills()];
      return $q.all(promises).then(function() {
        console.log("Data got!")
      });
    }

    function getSkills() {
      return dataservice.getSkills().then(function(data) {
        vm.skills = data;
        return vm.skills;
      });
    }

  }
})();
