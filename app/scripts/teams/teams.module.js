(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams', [
      'ui.router',
      'hackfmiApp.auth',
      'hackfmiApp.invitations',
      'permission'
    ])
    .value('seasonData', {
      number: null,
      min_team_members_count: null,
      max_team_members_count: null
    });
})();
