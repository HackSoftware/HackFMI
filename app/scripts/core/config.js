(function() {
  'use strict';

  var core = angular.module('hackfmiApp.core');


  // var config = {
  //   appErrorPrefix: '[NG-Modular Error] ', //Configure the exceptionHandler decorator
  //   appTitle: 'Core app',
  // };

  // core.value('config', config);

  core.config(configure);

  /* @ngInject */
  function configure ($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise("/");
  }
})();
