'use strict';

/**
 * @ngdoc function
 * @name hackfmiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackfmiApp
 */
angular.module('hackfmiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
