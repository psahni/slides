'use strict';

/**
 * @ngdoc overview
 * @name codeApp
 * @description
 * # codeApp
 *
 * Main module of the application.
 */
var app = angular
  .module('codeApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when("/", {templateUrl: 'views/main.html', controller:'MainCtrl'});
  $routeProvider.when('/example1', {templateUrl: 'views/example.html', controller: 'Examples'});

}]);


