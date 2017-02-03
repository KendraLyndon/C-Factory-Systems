app.controller("ScrollController", function($scope, $state, $stateParams, $location, $anchorScroll) {

  $scope.scrollTo = function(id) {
    if ($state.current.name === "index.home") {
      $location.hash(id);
      $anchorScroll();
    } else {
      $state.go("index.home");
      // $location.hash(id);
      // $anchorScroll();
    }
  }

})
