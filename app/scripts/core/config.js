(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .constant("DATA_URL", "http://data.hackbulgaria.com/hackfmi/api/")
    .filter('unsafe', function($sce) { return $sce.trustAsHtml; })
    .config(configure);
  
  function configure($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/auth-main.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        data: {
          permissions: {
            only: ['anonymous'],
            redirectTo: 'teamfind.notification'
          }
        },
        resolve: {
          season: getSeasonPrep
        }
      });

    function getSeasonPrep(dataservice) {
      return dataservice.getSeason()
        .then(function(response) {
          return response.data[0];
        });
    }
  }
})();
