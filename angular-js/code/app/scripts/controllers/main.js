'use strict';

/**
 * @ngdoc function
 * @name codeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeApp
 */
angular.module('codeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
