var app = angular.module('myApp');

app.controller('myAppCtrl', function($scope, mySrv) {
  $scope.name = "Jackie"

  $scope.friends = mySrv.friends;
})