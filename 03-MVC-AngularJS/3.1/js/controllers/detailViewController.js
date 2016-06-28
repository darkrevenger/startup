myApp.controller('detailMovie', ['$scope', '$localStorage', '$routeParams', function($scope, $localStorage, $routeParams) { 

  // This shows the movie details

  $scope.position = Number($routeParams.position);

  $scope.name = $localStorage.movies[$scope.position].name;
  $scope.cover = $localStorage.movies[$scope.position].cover;
  $scope.year = $localStorage.movies[$scope.position].year;
  $scope.duration = $localStorage.movies[$scope.position].duration;
  $scope.price = $localStorage.movies[$scope.position].price;

}]);