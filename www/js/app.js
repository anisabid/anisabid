'use strict';

(function () {

  angular.module('anabApp', [
    'ui.router'
  ])

    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', '$compileProvider',
      function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $compileProvider) {

        $stateProvider
          .state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'js/home/templates/home.html',
            resolve: {
              ContributorOwner: ['$stateParams', 'ContributorFactory', function ($stateParams, ContributorFactory) {
                return ContributorFactory.contributorOwner();
              }]
            }
          })
        ;
        $urlRouterProvider.otherwise('home');

        $locationProvider.html5Mode(false);
        $compileProvider.debugInfoEnabled(false);
      }])

    .run();

})();