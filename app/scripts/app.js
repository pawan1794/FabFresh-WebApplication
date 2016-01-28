'use strict';

/**
 * @ngdoc overview
 * @name gauravApp
 * @description
 * # gauravApp
 *
 * Main module of the application.
angular
  .module('gauravApp', [
    'ngResource'
  ]);
*/
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: '../views/login.html'
        })
        

         // nested list with custom controller
        .state('sign-up', {
            url: '/sign-up',
            templateUrl: '../views/sign-up.html',
        })

        .state('forgot-password', {
            url: '/forgot-password',
            templateUrl: '../views/forgot-password.html',
        })
        .state('reset-password', {
            url: '/reset-password',
            templateUrl: '../views/reset-password.html',
        })
        // nested list with just some random string data
});



