myApp.controller('mainController', ['$scope', '$localStorage', function($scope, $localStorage) { 

if ($localStorage.textArea != undefined && $localStorage.textArea.length != 0)
  {
    $scope.textArea = $localStorage.textArea;

  } else {

  $scope.textArea = ['Me encontraste! :O'];
  };

  $scope.addtextArea = function(userdata){
    $localStorage.textArea.push(userdata);
  };


  $localStorage.textArea = $scope.textArea;

}]);