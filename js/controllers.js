app.controller('MovieSearchController', function($scope, $http){
  $scope.$watch('search', function() {
    fetch();
  });

$scope.titleSearch = '';

function fetch() {
$http.get("http://img.omdbapi.com/?t="+ $scope.titleSearch + "&tomatoes=true&r=json&plot=full")
}).then(function successCallback(response) {
    $scope.details = response.data;
  }, function errorCallback(response) {
    console.log(response);
  });
})
