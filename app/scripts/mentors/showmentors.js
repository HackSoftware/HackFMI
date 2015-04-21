(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .controller('ShowMentorsCtrl', ShowMentors);

  function ShowMentors($q, mentorservice, mentors) {
    /*jshint validthis: true */
    var vm = this;
    vm.mentors = mentors
  }
})();
