(function() {
  "use strict";
  angular.module("app").controller("moviesCtrl", function($scope, $http) {

    $scope.setup = function() {
      $http.get("/api/v1/movies.json").then(function(response) {

        $scope.movies = response.data;

      });
    }

    $scope.sortByAttribute = function(attribute) {
      if ($scope.sortAttribute == attribute) {
        $scope.descending = !$scope.descending;
      } else {
        $scope.descending = false;
      }
      $scope.sortAttribute = attribute;
    }

    $scope.showInformation = function(movie){
      movie.showInfo = !movie.showInfo;
    }

    $scope.addMovie = function(newName, newLength, newDescription, newYear){
      var movie = {
        name: newName,
        length: newLength,
        description: newDescription,
        year: newYear
      };
      $http.post("/api/v1/movies.json", movie).then(function(response) {
        $scope.movies.push(response.data);
        $scope.errors = null;
      }, function(error) {
        $scope.errors = error.data.errors;
      });
      $scope.newName = null;
      $scope.newLength = null;
      $scope.newDescription = null;
      $scope.newYear = null;
    }

    $scope.deleteMovie = function(movie) {
      var index = $scope.movies.indexOf(movie);
      $http.delete("/api/v1/movies/" + movie.id + ".json").then(function(response) {
        $scope.movies.splice(index, 1);
      });
    };

    $scope.pickEditMovie = function(movie) {
      $scope.editingMovie = movie;
    }

    $scope.updateMovie = function(editingMovie) {
      var movie = {
        name: editingMovie.name,
        length: editingMovie.length,
        description: editingMovie.description,
        year: editingMovie.year,
        id: editingMovie.id
      };

      var index = $scope.movies.indexOf(movie);

      $http.patch("/api/v1/movies/" + movie.id + ".json", movie).then(function(response) {
        $scope.movies[index] = response.data;
      });
      $scope.editingMovie = null;
    }

    $scope.cancelEdit = function() {
      $scope.editingMovie = null;
    }
    
    window.$scope = $scope;
  });
})();