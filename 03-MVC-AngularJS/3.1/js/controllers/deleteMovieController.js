myApp.controller('deleteMovie', ['$scope', '$localStorage', function($scope, $localStorage) { 

  // Delete a movie
  
  $scope.deleteMovie = function (position) {
    $localStorage.movies.splice(position, 1);
  };

}]);