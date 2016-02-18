'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
  .module('App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {templateUrl: 'views/main.html', controller: 'MainCtrl', controllerAs: 'main'})
      .when('/login', {templateUrl: 'views/form.html', controller: 'MainCtrl', controllerAs: 'main'})
      .when('/registration', {templateUrl: 'views/form_registration.html'})
      .otherwise({
        redirectTo: '/'
      });
  });
