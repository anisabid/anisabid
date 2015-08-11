'use strict';

(function() {

  angular.module('anabApp')
    .controller('DetailController', ['$scope', '$timeout', '$filter', 'ContributorOwner',
      function($scope, $timeout, $filter, ContributorOwner) {

        $scope.main = {
          searchVisible: false,
          searchIcon: false,

          // Search
          search: function() {
            return true;
          }
        };

        //ContributorProvider.getContributorOwners();

        $scope.contributor = ContributorOwner[0];



      }]);

})();