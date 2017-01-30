app.controller("AboutController", function($scope, TeamService) {
  $scope.vm = {};
  $scope.vm.team = TeamService.teamMembers;

})
