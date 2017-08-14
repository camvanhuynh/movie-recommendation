var app = angular.module('MovieRecommendationApp', ['ui.router']);

/*
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
*/

app.controller('viewEditController',function($scope,$http) {
  var vm = this;
  vm.isEditing = false;

  $scope.postData = function (movie) {
    console.log('function postData is invoked');
    var data = {
      title: movie.title,
      date: movie.date,
      duration: movie.duration,
      genre: movie.genre,
      synopsis: movie.synopsis
    };

   // temp until we can get this working on the server
   $scope.title = data.title;
   $scope.date = data.date;
   $scope.duration = data.duration;
   $scope.genre = data.genre;
   $scope.synopsis = data.synopsis;

    console.log('started to post data');
    $http.post('postDataResponse',JSON.stringify(data)).then(function (response) {
      console.log('response status: ' + response.status);
      console.log('status text: ' + response.statusText);
    });
    vm.isEditing = false;
  };

  $scope.editRecommendation = function () {
    vm.isEditing = true;
    console.log('edit movie selected');
  };

	});
