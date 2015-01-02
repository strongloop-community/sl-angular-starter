var Main = angular.module('Main', [
  'ui.router',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'angularSpinner',
  'ngCookies',
  'HelloWorld',
  'Common',
  'ui.bootstrap',
  'ui.utils'
]);

Main.config([
  '$stateProvider',
  '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './scripts/modules/main/templates/main.html',
        controller: 'MainController'
      });

  }
]);
