(function() {
  'use strict';

  angular
    .module('hackfmiApp.teams')
    .config(configure);

  function configure ($stateProvider) {
    $stateProvider
      .state('teamfind', {
        templateUrl: 'views/teams-teams.html',
        resolve: {
          me: meInfo
        },
        controller: 'TeamNavCtrl',
        controllerAs: 'vm'
      })
      .state('teamfind.notification', {
        url: '/teamfind',
        templateUrl: 'views/teams-teams.html',
        views: {
          'notification': {
            controller: 'NotificationsCtrl',
            controllerAs: 'nm',
            templateUrl: 'views/teams-notification.html',
            resolve: {
              invs: invitationsPrepS
            }
          },
          'teamfind': {
            controller: 'TeamFindCtrl',
            controllerAs: 'vm',
            templateUrl: 'views/teams-teamfind.html',
            resolve: {
              teams: teamsPrepService
            }
          }
        }
      })
      .state('teamadd', {
        url: '/teamadd',
        templateUrl: 'views/teams-teamadd.html',
        controller: 'TeamAddCtrl',
        controllerAs: 'vm',
        resolve: {
          technologies: techPrepService
        },
        data: {
          permissions: {
            only: ['notinteam']
          }
        }
      })
      .state('teamedit', {
        url: '/teamedit',
        templateUrl: 'views/teams-teamedit.html',
        controller: 'TeamEditCtrl',
        controllerAs: 'vm',
        resolve: {
          technologies: techPrepService,
          myteam: myTeam
        },
        data: {
          permissions: {
            only: ['leader']
          }
        }
      })
      .state('myteam', {
        url: '/team',
        templateUrl: 'views/teams-myteam.html',
        controller: 'TeamCtrl',
        controllerAs: 'vm',
        resolve: {
          team: myTeam,
          me: meInfo
        },
        data: {
          permissions: {
            except: ['anonymous'],
            redirectTo: 'login'
          }
        }
      })
      .state('teamspublic', {
        url: '/teamsall',
        templateUrl: 'views/teams-public.html',
        controller: 'TeamsPublicCtrl',
        controllerAs: 'vm',
        resolve: {
          teams: teamsPublicService
        },
        data: {
          permissions: {
            only: ['anonymous']
          }
        }
      });

    function meInfo(authservice) {
      return authservice.info()
        .then(function(response) {
          return response.data;
        });
    }

    function myTeam(authservice, teamservice) {
      return authservice.info()
        .then(function(response) {
          return response.data.teammembership_set[0].team;
        })
        .then(function(team) {
          return teamservice.getMyTeam(team)
            .then(function(response) {
              return response.data[0];
            });
        });
    };

    function teamsPublicService(teamservice) {
      return teamservice.getTeamsPublic()
        .then(function(response) {
          return response.data;
        });
    }

    function teamsPrepService(teamservice) {
      return teamservice.getTeams();
    }

    function techPrepService(dataservice) {
      return dataservice.getSkills();
    }

    function invitationsPrepS(invitations) {
      return invitations.getInvites()
        .then(function(response) {
          return response.data;
        });
    }
  }
})();
