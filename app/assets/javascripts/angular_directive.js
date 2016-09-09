angular.module("app").directive('milleniumFalcon', function() {
  return {
    restrict: 'E',
    templateUrl: "milleniumFalcon.html"
  }
}); 

angular.module("app").directive('autoList', function() {
  return {
    restrict: 'E',
    templateUrl: "autoPopList.html"
  }
});