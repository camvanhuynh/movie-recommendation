var app = angular.module('MovieRecommendationApp', ['ui.router']);

app.config(function ($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/movie');

  $stateProvider
    .state('movie', {
      url: '/movie',
      templateUrl: '../movie.html'
      //controler
    })
    .state('edit', {
      url: '/edit',
      templateUrl: '../edit.html'
    });

})
