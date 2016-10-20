angular.module("MovieApp", ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/searchResults/:title",
    {
      templateUrl: "/views/searchResults.html",
      controller: "searchResults"
    })
  .when("/show/:imdbID",
    {
      templateUrl: "/views/show.html",
      controller: "ShowCtrl"
    })
  .when("/",
    {})

  $locationProvider.html5Mode(true);
})
