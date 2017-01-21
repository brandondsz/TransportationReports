
var app = angular.module('myApp.Report1', []);


app.controller('Report1Controller', function ($scope, $http) {

  $scope.myData = [];//getRecords();

  $scope.getRecords = function () {
    $http.get(url + "/devices")
      .then(function (response) {
        var newArray = [];
        var array = response.data;
        $scope.myData = array.map(function(value){return{"Device":value}});
      });
  }

  
});