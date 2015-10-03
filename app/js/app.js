'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/view1', {
      templateUrl: 'partials/view1.html'
    })
    .when('/view2', {
      templateUrl: 'partials/view2.html'
    })
}]);
