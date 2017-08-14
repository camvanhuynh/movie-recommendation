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

app.controller('viewEditController',function($http) {
  var vm = this;
  vm.isEditing = false;
  vm.movie = {};

  vm.save = function () {
    console.log('function postData is invoked');

    //console.log('after save, scope.title is' + );

    // var data = {
    //   title: $scope.title,
    //   date: $scope.date,
    //   duration: $scope.duration,
    //   genre: $scope.genre,
    //   synopsis: $scope.synopsis
    // };

   // temp until we can get this working on the server
  //
  //  $scope.title = data.title;
  //  $scope.date = data.date;
  //  $scope.duration = data.duration;
  //  $scope.genre = data.genre;
  //  $scope.synopsis = data.synopsis;



    console.log('started to post data');
    console.log('data is ' + vm.movie.title);

    $http.post('/recommendation',JSON.stringify(vm.movie)).then(function (response) {
      console.log('response status: ' + response.status);
      console.log('status text: ' + response.statusText);
    });

    vm.isEditing = false;
  };

  vm.edit = function () {
    vm.isEditing = true;
    console.log('edit movie selected');
    //console.log('before saveeee: title is ' + $scope.title);
  };

  $http.get('/recommendation').then(function (res) {
     vm.movie = res.data;
    // $scope.title = object.title;
    // $scope.date = object.date;
    // $scope.duration = object.duration;
    // $scope.genre = object.genre;
    // $scope.synopsis = object.synopsis;

    console.log('calling http.get....');
  });

  vm.cancel = function () {
    vm.isEditing = false;

  };

	});
