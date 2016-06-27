myApp.controller('deleteMovie', ['$scope', '$localStorage', function($scope, $localStorage) { 

  // Delete a movie

  $scope.deleteMovie = function (index) {
    $localStorage.movies.splice(index, 1);
  };

}]);