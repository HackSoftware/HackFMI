(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.nav')
    .factory('navbar', navbar);
  
  function navbar($state) {
    var service = {
      anonymous: anonymous
    };
    
    return service;

    //def service methods here
    function anonymous() {
      var menu = [
        {
          title: "Ментори",
          action: 'mentors'
        },
        {
          title: "Регистрация",
          action: 'register'
        },
        {
          title: "Вход",
          action: 'login'
        }
      ];
      return menu;
    };
  }
})();
