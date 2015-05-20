(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.mentors')
    .controller('scheduleCtrl', scheduleCtrl);
  
  function scheduleCtrl(dataFull, navbar, $q, ngTableParams, $filter) {
    var vm = this;
    vm.menu = navbar.anonymous();
    vm.dataFull = dataFull;
    vm.data = dataFull.tableData;
    vm.leftovers = dataFull.leftovers;
  };
})();
