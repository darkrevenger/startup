var myApp = angular.module('myApp', ['ngStorage', 'ngRoute'])
.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider
      .when('/add-movie', {
        templateUrl: 'views/add-movie.html',
        controller: 'addMovie'
      })
      .when('/edit-movie/:position',
      {
        templateUrl: 'views/edit-movie.html',
        controller: 'editMovie'
      })
  }
]);

