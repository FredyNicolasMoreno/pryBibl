'use strict';


// Declare app level module which depends on filters, and services
var app=angular.module('adminBiblioteca', [
  'ngRoute',
  'angularUtils.directives.dirPagination',
  'adminBiblioteca.controllers'
]);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/menu.html'});
        $routeProvider.when('/Cliente', {templateUrl: 'partials/Cliente.html', controller: 'ClienteCtrl'});
        $routeProvider.when('/Ciudad', {templateUrl: 'partials/Ciudad.html', controller: 'CiudadCtrl'});
  	$routeProvider.otherwise({redirectTo: '/'}); 
}]);

var module=angular.module("adminBiblioteca.controllers",[]);
