app.controller("MagicController", function($scope, CategoryService) {
  $scope.vm = {};
  $scope.vm.categories = CategoryService.all;
})
