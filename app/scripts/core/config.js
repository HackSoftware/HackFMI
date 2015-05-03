(function() {
  'use strict';

  angular
    .module('hackfmiApp.core')
    .constant("DATA_URL", "https://data.hackbulgaria.com/hackfmi/api/")
    .filter('unsafe', function($sce) { return $sce.trustAsHtml; })
    .config(configure);

  // function setSeason(dataservice) {
  //   return dataservice.getSeason();
  // };

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
          console.log(response.data[0]);
          return response.data[0];
        });
    }
  }
})();
