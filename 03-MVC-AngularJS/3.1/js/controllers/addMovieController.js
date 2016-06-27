myApp.controller('addMovie', ['$scope', '$localStorage', function($scope, $localStorage) { 

  $scope.required = true;
  
  $scope.addMovie = function(){
    $localStorage.movies.push({
    name: $scope.name,
    year: $scope.year,
    duration: $scope.duration,
    img: $scope.cover,
    price: $scope.price
  });
  }

  
}]);