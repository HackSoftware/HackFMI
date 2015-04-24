(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .controller('NotificationsCtrl', NotificationsCtrl);

  function NotificationsCtrl(invs, invitations, $state) {
    var nm = this;
    nm.invs = invs;

    nm.accept = function(invitationId) {
      var data = {id: invitationId};
      invitations.accept(data)
        .then(function() {
          $state.go('myteam');
        });
    };

    nm.decline = function(invitationId) {
      invitations.decline(invitationId)
        .then(function(response) {
          $('#' + invitationId).remove();
        });
    };
  };
})();
