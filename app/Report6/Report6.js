var app = angular.module('myApp.Report6', []);

app.controller('Report6Controller', function ($scope, $http) {
  $scope.myData = [];

  $scope.getRecords = function () {
    var fromDate = Math.floor(new Date($scope.fromDate) / 1000);
    var toDate = Math.floor(new Date($scope.toDate) / 1000);
    
    $http.get(url + "/systemHealth/" + fromDate + "/" + toDate)
      .then(function (response) {
        console.log(response)
        $scope.myData = response.data == undefined ? [] : response.data;
        console.log($scope.myData)
      });
  }
});
