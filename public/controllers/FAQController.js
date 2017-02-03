app.controller("FAQController", function($scope, FAQService) {
  $scope.vm = {};
  $scope.vm.questions = FAQService.questions;
})
