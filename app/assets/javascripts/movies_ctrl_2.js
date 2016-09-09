(function() {
  "use strict";
  angular.module("app").controller("moviesCtrl2", function($scope, $http) {

    $scope.searchMovies = function(searchString) {
      console.log("/api/v1/movies?search_attribute=name&search_attribute_2=" + searchString);
      $http.get("/api/v1/movies?search_attribute=name&search_attribute_2=" + searchString).then(function(response) {

        $scope.movies = response.data;

      });
    }

    window.$scope = $scope;
  });
})();