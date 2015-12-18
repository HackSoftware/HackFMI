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

    function anonymous() {
      var menu = [
        {
          title: "График",
          action: 'schedule'
        },
        {
          title: "Ментори",
          action: 'showmentors'
        },
        {
          title: "Всички отбори",
          action: 'teamspublic'
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
          title: "График",
          action: 'schedule'
        },
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
      var menu = [
        {
          title: "График",
          action: 'schedule'
        },
        {
          title: "Ментори",
          action: 'showmentors'
        },
        {
          title: "Създай отбор",
          action: 'teamadd'
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

    function inteam() {
      var menu = [
        {
          title: "График",
          action: 'schedule'
        },
        {
          title: "Ментори",
          action: 'showmentors'
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
  }
})();
