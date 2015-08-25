'use strict';

(function () {

  angular.module('anabApp')
    .directive('amCardDetail', function () {

      return {
        restrict: 'E',
        replace: true,
        multiElement: true,
        transclude: true,
        templateUrl: 'js/main/templates/card-detail.html',

        scope: {
          data: '='
        },
        link: function (scope, elem) {

          scope.user = scope.data;

          var
            thumbnail = scope.data.picture.thumbnail,
            avatar = angular.element(elem[0].querySelectorAll('.avatar')[0]);

          // preload image
          var img = new Image();
          img.src = thumbnail;

          var unbind = function () {
            angular.element(img).off();
          };


          angular.element(img).on('load', function () {
            avatar.css({
              backgroundImage: 'url(' + thumbnail + ')'
            });
            unbind();
          });

          angular.element(img).on('error', function () {
            errorImg();
            unbind();
          });

          var errorImg = function () {
            return true;
          };


        }

      }

    });

})();
