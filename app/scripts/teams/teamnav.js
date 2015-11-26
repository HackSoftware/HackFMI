(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .controller('TeamNavCtrl', TeamNavCtrl);

  function TeamNavCtrl(me, navbar) {
    var vm = this;

    vm.me = me;
    if(me.current_teammembership_set.length == 0) {
      vm.menu = navbar.notinteam();
    }
    else if (me.current_teammembership_set[0].is_leader == true) {
      vm.menu = navbar.leader();
    }
    else {
      vm.menu = navbar.inteam();
    }
  };
})();
