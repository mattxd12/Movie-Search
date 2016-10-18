var app = angular.module("MovieApp", []);

app.controller('MovieSearchController', function($scope, $http){
  $scope.$watch('titleSearch', function() {
    fetch();
  });

  $scope.titleSearch = '';

  function fetch() {
  $http.get("https://www.omdbapi.com/?t="+ $scope.titleSearch + "&tomatoes=true&r=json&plot=full")
  .then(function successCallback(response) {
    console.log($scope.titleSearch);
      console.log(response.data);
      $scope.details = response.data;
  }, function errorCallback(response) {
        console.log(response);
    });
  }
})
