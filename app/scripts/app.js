'use strict';

/**
 * @ngdoc overview
 * @name gbWebshopApp
 * @description
 * # gbWebshopApp
 *
 * Main module of the application.
 */
angular
  .module('gbWebshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider,$stateProvider,$locationProvider,$urlRouterProvider) {

    $locationProvider.html5Mode({
     enabled: true
     }).hashPrefix('!');

    $urlRouterProvider.otherwise('/');

     $stateProvider
        .state('gobazaar', {
          abstract: true,
          views: {
            'header': {
              templateUrl: 'views/common/header.html',
              controller: 'HeaderCtrl'
            },
            'footer': {
              templateUrl: 'views/common/footer.html',
              controller: ''
            }
          },
          resolve:{
            createSession:function(user,$cookies){
              if(!$cookies.get('sessionId')){
                return user.getSessionId();
              }  
            }
          }

        })
        .state('gobazaar.home', {
          url: '/',
          views: {
            '@':{
              templateUrl: 'views/pages/home.html',
              controller: 'HomeCtrl'
            }
          },
          resolve:{
            
          }
        })
    
  });
