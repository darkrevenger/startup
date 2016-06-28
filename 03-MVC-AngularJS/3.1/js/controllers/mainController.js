myApp.controller('mainController', ['$scope', '$localStorage', function($scope, $localStorage) { 

  $scope.title = 'This movies are AWESOME! Why dont you add some you like so I can see your great taste?'; 

  if ($localStorage.movies != undefined && $localStorage.movies.length != 0)
  {
    console.log($localStorage.movies);
    console.log("Hola");
    $scope.movies = $localStorage.movies;

  } else {

  $scope.movies = [
    { 
      name: 'The Lord of the Rings: The Fellowship of the Ring', 
      price: 200, 
      year: new Date('2001', '09', '19'), //no usar new buscar otra manera de hacerlo 
      duration: 180,
      cover: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring.jpg',
      likes: 0
    }, 
    { 
      name: 'The Lord of the Rings: The Fellowship of the Ring II', 
      price: 8, 
      year: new Date('2001', '09', '19'), 
      duration: 150,
      cover: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring.jpg',
      likes: 0 
    }, 
    { 
      name: 'The Lord of the Rings: The Two Towers', 
      price: 11.99, 
      year: new Date('2002', '12', '18'), 
      duration: 133,
      cover: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Two-Towers.jpg',
      likes: 0 
    }, 
    { 
      name: 'The Lord of the Rings: The Return of the King', 
      price: 7.99, 
      year: new Date('2003', '12', '17'), 
      duration: 157,
      cover: 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Return-Of-The-King.jpg',
      likes: 0 
    }
  ];
  };

  // Storage to movie

  $localStorage.movies = $scope.movies;

  // Select a movie

  /*$scope.selectMovie = function(index){

    $scope.name = $localStorage.movies[index].name;
    $scope.year = $localStorage.movies[index].year;
    $scope.duration = $localStorage.movies[index].duration;
    $scope.cover = $localStorage.movies[index].cover;
    $scope.price = $localStorage.movies[index].price;

  };
  */



  //like button

  $scope.plusOne = function(index) { 
    $scope.products[index].likes += 1; 
  };



}]);

// {{ algo.algomas | number }} Formats a number as text.