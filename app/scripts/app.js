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
  .module('App', ['ngAnimate','ngCookies','ngResource', 'ngRoute', 'ngSanitize','ngTouch', 'ngDialog'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/login', {templateUrl: 'views/form.html', controller: 'LoginCtrl',  services: 'loginService'}) //move logic to LoginCtrl
      .when('/registration', {templateUrl: 'views/form_registration.html', controller: 'LoginCtrl', services: 'loginService'}) //- loginctrl
      .when('/shop', {templateUrl: 'views/shop.html', controller: 'ShopCtrl', services: 'loginService', directives: 'facebookShare'})
      .when('/test',{templateUrl: 'views/test.html', controller: 'TestCtrl'})
      .otherwise({templateUrl: '/404.html'});
  });
