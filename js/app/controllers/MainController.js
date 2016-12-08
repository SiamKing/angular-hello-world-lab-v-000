function MainController($scope) {
  $scope.name = "Butty";
  $scope.email = "butty@hotmail.com";
  $scope.phone = '212-334-5567';
}

angular
  .module('app')
  .controller('MainController', MainController)
