'use strict';

angular.module('ajsApp')
  .controller('TestCtrl', function ($scope,$http) {
    $http.get('http://www.w3schools.com/website/Customers_JSON.php')
  .success(function(response) {$scope.names = response;});
  });
