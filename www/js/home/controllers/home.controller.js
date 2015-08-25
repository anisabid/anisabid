'use strict';

(function () {

  angular.module('anabApp')
    .controller('HomeController', ['$scope', '$state', 'ContributorOwner',
      function ($scope, $state, ContributorOwner) {
        $scope.contributor = ContributorOwner;
      }]);

})();