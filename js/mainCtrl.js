var app = angular.module('myApp');

app.controller('myAppCtrl', function($scope) {
  $scope.name = "Jackie"

  $scope.friends = ["James", "Anthony", "Albert"]
})