app.controller("HomeController", function($scope, TeamService, CategoryService) {
  $scope.vm = {};
  $scope.vm.team = TeamService.teamMembers;
  $scope.vm.categories = CategoryService.all;
})
