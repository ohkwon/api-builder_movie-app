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

    $scope.updateMovie = function(editName, editLength, editDescription, editYear, editId) {
      var movie = {
        name: editName,
        length: editLength,
        description: editDescription,
        year: editYear,
        id: editId
      };
      var index = $scope.movies.indexOf(movie);

      $http.patch("/api/v1/moves/" + movie.id + ".json").then(function(response) {
        $scope.movies[index] = response.data;
      });
      $scope.editingMovie = null;
    }
    
    window.$scope = $scope;
  });
})();