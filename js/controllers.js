var app = angular.module("MovieApp", ['ngAnimate']);


app.controller('MovieSearchController', function($scope, $http){
    $scope.details = {};
$scope.searchThis = function () {
  $http.jsonp("https://www.omdbapi.com", {
    params: {
      s: $scope.titleSearch,
      r: 'json',
      callback: 'JSON_CALLBACK'
    }
  })
  .success(function (response) {
      $scope.details = response.Search;
      $scope.titleSearch = '';
    })
    .error(function (data){
      console.log(error);
    })
    .finally(function(){
    })
  }
})

// "&tomatoes=true&r=json&plot=full"
/* <a href='partials/show'><img ng-src="{{ view.Poster }}" class="col-md-4"></a> */
