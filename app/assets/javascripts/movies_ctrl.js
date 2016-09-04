(function() {
  "use strict";
  angular.module("app").controller("moviesCtrl", function($scope, $http) {

    $scope.setup = function() {
      $http.get("/api/v1/movies.json").then(function(response) {

        for (var i = 0; i < response.data.length; i++) {
          response.data[i].addKey = false;
        }

        $scope.movies = response.data;

      });
    }

    $scope.showInformation = function(movie){
      movie.showInfo = !movie.showInfo;
    }
    
    window.$scope = $scope;
  });
})();