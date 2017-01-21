var app = angular.module('myApp.Report2', []);

app.controller('Report2Controller', function ($scope, $http) {
  $scope.myData = [];

  $scope.getRecords = function () {
    var deviceID = $scope.deviceID;
    var fromDate = Math.floor(new Date($scope.fromDate) / 1000);
    var toDate = Math.floor(new Date($scope.toDate) / 1000);
    $http.get(url + "/geoLocation/" + deviceID + "/" + fromDate + "/" + toDate)
      .then(function (response) {
        $scope.myData = response.data == undefined ? [] : response.data;
      });
  }

});