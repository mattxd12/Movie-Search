angular.module("MovieApp")

.controller('MovieSearchController', function($scope, $http, $location){
    $scope.details = {};
    $scope.searchThis = function () {
      $location.path(`/searchResults/${$scope.titleSearch}`)
      $location.path('/searchResults/' + {$scope.titleSearch})
    }
  })

.controller('searchResults', function($scope, $routeParams, $http){
  $http.get(`https://www.omdbapi.com/?s=${$routeParams.title}`)
  .then(function (response) {
    $scope.details = response.data.Search;
    $scope.titleSearch = '';
  })
  .catch( function (err) {
    console.log('Error:'+err)
  })
})

.controller('ShowCtrl', function($scope, $routeParams, $http){
  $http.get(`https://www.omdbapi.com/?i=${$routeParams.imdbID}`)
  .then(function (response) {
      let resda = response.data;
      $scope.details = {};
      console.log(resda);
      $scope.details = resda.Search;
      $scope.Title = resda.Title;
      $scope.Year = resda.Year;
      $scope.Poster = resda.Poster;
      $scope.Actors = resda.Actors;
      $scope.Awards = resda.Awards;
      $scope.Director = resda.Director;
      $scope.Genre = resda.Genre;
      $scope.Metascore = resda.Metascore;
      $scope.Plot = resda.Plot;
      $scope.Rated = resda.Rated;
      $scope.Runtime = resda.Runtime;
      $scope.Writer = resda.Writer;
      $scope.imdbRating = resda.imdbRating;
      $scope.imdbVotes = resda.imdbVotes;
      $scope.titleSearch = '';
    })
    .catch( function (err) {
      console.log(err);
    })

  })
