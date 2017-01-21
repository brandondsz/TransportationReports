var app = angular.module('myApp.Report4', []);

app.controller('Report4Controller', function ($scope, $http) {
  $scope.myData = [];

  $scope.getRecords = function () {
    var latitude = $scope.latitude;
    var longitude = $scope.longitude;
    var fromDate = Math.floor(new Date($scope.fromDate) / 1000);
    var toDate = Math.floor(new Date($scope.toDate) / 1000);
    $http.get(url + "/geoDwell/" + latitude + "/" + longitude + "/" + fromDate + "/" + toDate)
      .then(function (response) {
        $scope.myData = response.data == undefined ? [] : response.data.map(function(value){return{"Device":value}});
      });
  }
});