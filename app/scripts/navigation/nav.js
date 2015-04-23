(function() {
  'use strict';
  
  angular
    .module('hackfmiApp.nav')
    .factory('navbar', navbar);
  
  function navbar($state) {
    var service = {
      anonymous: anonymous,
      leader: leader,
      notinteam: notinteam,
      inteam: inteam
    };
    
    return service;

    //def service methods here
    function anonymous() {
      var menu = [
        {
          title: "Ментори",
          action: 'showmentors'
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

    function leader() {
      var menu = [
        {
          title: "Ментори",
          action: 'pickmentors'
        },
        {
          title: "Моят отбор",
          action: 'myteam'
        },
        {
          title: "Търсене на отбор",
          action: 'teamfind.notification'
        },
        {
          title: "Изход",
          action: 'logout'
        }
      ];
      return menu;
    };

    function notinteam() {
      
    };

    function inteam() {
      
    };   
  }
})();
