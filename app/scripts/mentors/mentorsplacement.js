(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.mentors')
    .controller('scheduleCtrl', scheduleCtrl);
  
  function scheduleCtrl(mentorservice, navbar, $q, ngTableParams) {
    var vm = this;
    vm.menu = navbar.anonymous();
    
    mentorservice.mentorsSchedule()
      .then(function(response) {
        vm.data = response.tableData;
        vm.leftovers = response.leftovers;
      });
    vm.tableParams = new ngTableParams({
      page: 1,
      count: 10
    }, {
      total: data.length, // length of data
      getData: function($defer, params) {
        // use build-in angular filter
        var orderedData = params.filter() ?
            $filter('filter')(data, params.filter()) :
            data;
        
        $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
        
        params.total(orderedData.length); // set total for recalc pagination
        $defer.resolve($scope.users);
      }
    });
  };
})();
