myApp.controller('editMovie', ['$scope', '$localStorage', '$routeParams', function($scope, $localStorage, $routeParams) { 

  // Edit a movie

  $scope.position = Number($routeParams.position);
  $scope.name = $localStorage.movies[$scope.position].name;
  $scope.year = $localStorage.movies[$scope.position].year;
  $scope.duration = $localStorage.movies[$scope.position].duration;
  $scope.cover = $localStorage.movies[$scope.position].cover;
  $scope.price = $localStorage.movies[$scope.position].price;

  $scope.editMovie = function (position) {
    
    $localStorage.movies[position].name = $scope.name; 
    $localStorage.movies[position].year = $scope.year; 
    $localStorage.movies[position].duration = $scope.duration; 
    $localStorage.movies[position].cover = $scope.cover; 
    $localStorage.movies[position].price = $scope.price;

  };

}]);