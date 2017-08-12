var app = angular.module('MovieRecommendationApp', ['ui.router']);

app.config(function ($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/movie');

  $stateProvider
    .state('movie', {
      url: '/movie',
      templateUrl: '../movie.html',
      controller: 'viewEditController'
    })
    .state('edit', {
      url: '/edit',
      templateUrl: '../edit.html',
      controller: 'viewEditController'

    });

});

app.controller('viewEditController',function($scope,$http) {
  $scope.postData = function () {
    //console.log('function postData is invoked');
    $scope.title = 'Hello'; //testing

  };
	});
