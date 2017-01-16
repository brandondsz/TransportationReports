'use strict';

var app = angular.module('myApp', ['ui.grid', 'angularjs-datetime-picker']);



app.controller('ReportController', function ($scope, $http) {
  $scope.selectedReport = "report-1";

  $scope.update = function (report) {
    $scope.selectedReport = report;
  };
})

app.controller('Report1Controller', function ($scope, $http) {

  $scope.myData = [];

  $scope.getRecords = function () {
    $http.get("http://localhost:3000/devices")
      .then(function (response) {
        var newArray = [];
        var array = response.data;
        if (array != []) {
          array.forEach(function (item, index) {
            newArray.push({ "Device": array[index] })
          });
        }
        $scope.myData = newArray;
      });
  }
});

app.controller('Report2Controller', function ($scope, $http) {
  $scope.myData = [];

  $scope.getRecords = function () {
    var deviceID = $scope.deviceID;
    var fromDate = Math.floor(new Date($scope.fromDate) / 1000);
    var toDate = Math.floor(new Date($scope.toDate) / 1000);
    $http.get("http://localhost:3000/geoLocation/" + deviceID + "/" + fromDate + "/" + toDate)
      .then(function (response) {
        $scope.myData = response.data == undefined ? [] : response.data;
      });
  }
});

app.controller('Report3Controller', function ($scope, $http) {
  $scope.myData = [];

  $scope.getRecords = function () {
    var fromDate = Math.floor(new Date($scope.fromDate) / 1000);
    var toDate = Math.floor(new Date($scope.toDate) / 1000);
    $http.get("http://localhost:3000/geoOverSpeeding/" + fromDate + "/" + toDate)
      .then(function (response) {
        $scope.myData = response.data == undefined ? [] : response.data;
      });
  }
});



app.controller('Report4Controller', function ($scope, $http) {
  $scope.myData = [];

  $scope.getRecords = function () {
    var latitude = $scope.latitude;
    var longitude = $scope.longitude;
    var fromDate = Math.floor(new Date($scope.fromDate) / 1000);
    var toDate = Math.floor(new Date($scope.toDate) / 1000);
    $http.get("http://localhost:3000/geoDwell/" + latitude + "/" + longitude + "/" + fromDate + "/" + toDate)
      .then(function (response) {
        $scope.myData = response.data == undefined ? [] : response.data;
      });
  }
});