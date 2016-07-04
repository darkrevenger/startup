myApp.controller('mainController', ['$scope', '$localStorage', function($scope, $localStorage) { 

  var text = $scope.element.getElementByClassName('textarea');

if ($localStorage.textArea != undefined && $localStorage.textArea.length != 0)
  {
    $scope.textArea = $localStorage.textArea;

  } else {

  $scope.textArea = ['Me encontraste! :O'];
  };

  // Save textarea into localstorage

  $scope.addtextArea = function(){
    $localStorage.textArea.push(text);
  };


  $localStorage.textArea = $scope.textArea;

}]);