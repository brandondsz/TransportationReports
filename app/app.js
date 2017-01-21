'use strict';

var app = angular.module('myApp', ['ui.grid', 'angularjs-datetime-picker','myApp.Report1','myApp.Report2','myApp.Report3','myApp.Report4','myApp.Report5','myApp.Report6']);

var url ="https://localhost:3000";

app.controller('ReportController', function ($scope, $http) {
  $scope.selectedReport = "Report1/Report1";

  $scope.update = function (report) {
    //This is not the best way to do it
    $scope.selectedReport = report ;
  };
})








