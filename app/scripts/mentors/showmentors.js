(function() {
  'use strict';

  angular
    .module('hackfmiApp.mentors')
    .controller('ShowMentorsCtrl', ShowMentors);

  function ShowMentors($q, $sce, mentorservice, mentors) {
    /*jshint validthis: true */
    var vm = this;
    vm.mentors = mentors.map(function(obj) {
      obj.description = $sce.trustAsHtml(obj.description);
      return obj;
    });
  }
})();
