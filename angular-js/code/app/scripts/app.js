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
    $routeProvider.when('/example2', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example3', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example4', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example5', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example6', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example7', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example8', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example9', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('example10', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example11', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example12', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example13', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example14', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example15', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example16', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example17', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example18', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example19', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example20', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example21', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example22', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example23', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example24', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example25', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example26', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/example27', {templateUrl: 'views/example.html', controller: 'Examples'});
    $routeProvider.when('/:countryName', {templateUrl: 'views/examples/test.html', controller: 'countryExample'})
}]);


