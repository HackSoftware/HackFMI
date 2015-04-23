angular.module('hackfmiApp.nav',['ngSanitize'])

  .directive('angledNavbar',[function(){
    return {
      restrict : 'AE',
      scope : {
 	menus : '=',
        navfn : '&'
      },
      templateUrl : 'views/core-navbar.html',
      controller : function($scope, $element, $attrs){

 	//== Scope/Attributes Defaults ==//

 	$scope.defaults = {
 	  menus : []
 	}; // end defaults

 	//-- Attribute Check --//

 	/* if no parent function was passed to directive for navfn
 	 * then create one to emit an event
 	 */

 	if(angular.isUndefined($attrs.navfn)){
 	  $scope.navfn = function(action){
 	    if(angular.isObject(action))
 	      $scope.$emit('angled-navbar.menu',action);
 	    else
 	      $scope.$emit('angled-navbar.menu',{'action' : action});
 	  }; // end navfn
 	}

 	/**
 	 * Navigation Action
 	 * Navigation menu items will call this function which in turn will
 	 * use the passed in navfn or emit an action for the parent to handle.
 	 * @param		string		action
 	 */
 	$scope.navAction = function(action){
 	  $scope.navfn({'action' : action});
 	}; // end navAction

 	/**
 	 * Has Menus
 	 * Checks to see if there were menus passed in for the navbar.
 	 * @result		boolean
 	 */
 	$scope.hasMenus = function(){
 	  return (angular.isDefined($attrs.menus));
 	}; // end hasMenus

      } // end controller
    }; // end return
  }])// end angledNavbar
