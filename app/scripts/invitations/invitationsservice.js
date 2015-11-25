(function() {
  'use strict';

  angular
    .module('hackfmiApp.invitations')
    .factory('invitations', invitations);

  function invitations($http, DATA_URL, authservice, lil) {
    var service = {
      sendInvite: sendInvite,
      getInvites: getInvites,
      accept: accept,
      decline: decline
    };
    
    return service;

    function sendInvite(data) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.post(DATA_URL + 'invitation/', data, options)
        .success(complete)
        .error(fail);
    }
    function getInvites() {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.get(DATA_URL + 'invitation/', options)
        .success(complete)
        .error(fail);
    }

    function accept(invitationId) {
      var options = { headers: { 'Authorization': 'Token ' + localStorage.token }};
      return $http.put(DATA_URL + 'invitation/', invitationId, options)
        .success(complete)
        .error(fail);
    }

    function decline(invitationId) {
      var config = {
        data: {
          'id': invitationId
        },
        headers: {
          'Authorization': 'Token ' + localStorage.token,
          'Content-Type': 'application/json'
        }
      }
      return $http.delete(DATA_URL + 'invitation/', config);
    }
  }

  function complete(data) {
    return data;
  }

  function fail(error) {
    return error;
  }
})();
