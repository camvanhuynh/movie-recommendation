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

  $scope.postData = function () {
    console.log('function postData is invoked');
    //$scope.title = 'Hello'; //testing
    var data = {
      title: $scope.title,
      date: $scope.date,
      duration: $scope.duration,
      genre: $scope.genre,
      synopsis: $scope.synopsis
    };

    console.log('started to post data');

    $http.post('postDataResponse',JSON.stringify(data)).then(function (response) {
      console.log('response status: ' + response.status);
      console.log('status text: ' + response.statusText);
    });

  };

  $scope.editRecommendation = function () {
    vm.isEditing = true;
    console.log('edit movie selected');
  };

	});
