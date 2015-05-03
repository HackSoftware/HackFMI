(function(){
  'use strict';
  
  angular
  .module('hackfmiApp.nav')
  .directive('angledNavbar',[function(){
    return {
      restrict : 'AE',
      scope : {
 	menus : '=',
        navfn : '&'
      },
      templateUrl : 'views/core-navbar.html',
      controller : function($scope, $element, $attrs, $state){

 	$scope.defaults = {
 	  menus : []
 	};

 	if(angular.isUndefined($attrs.navfn)){
 	  $scope.navfn = function(action){
 	    if(angular.isObject(action))
 	      $scope.$emit('angled-navbar.menu', action);
 	    else
 	      $scope.$emit('angled-navbar.menu',{'action' : action});
 	  };
 	}
 	$scope.navAction = function(action){
 	  $scope.navfn({'action' : action});
 	};

 	$scope.hasMenus = function(){
 	  return (angular.isDefined($attrs.menus));
 	};
      }
    };
  }]);
})();
