'use strict';

angular.module('ajsApp')
  .controller('HttpCtrl', function ($scope,$http,jsonFilter,$rootScope) {
    var url = 'http://www.corsproxy.com/coinabul.com/api.php';
    var logResult = function (str, data, status, headers, config)
    {
      return str + '\n\n' +
        'data: ' + data + '\n\n' +
	'parsed: ' + angular.toJson(data) + '\n\n' +
        'status: ' + status + '\n\n' +
        'headers: ' + jsonFilter(headers()) + '\n\n' +
        'config: ' + jsonFilter(config);
    };
     $http.get(url)
	.success(function (data){
	 //$scope.simpleGetCallResult = logResult('GET SUCCESS', data, status, headers, config);
	 $scope.currencies = data;
	 $scope.USD = parseInt($scope.currencies.BTC.USD, 10);
	 $scope.Ounces = parseInt($scope.currencies.BTC.Ounces, 10);
	 $scope.Grams = parseInt($scope.currencies.BTC.Grams, 10);
	 $rootScope.USD =$scope.USD;
	 $rootScope.$broadcast('tag',$scope.USD);
	// console.log(data); 
	// console.log($rootScope.USD); 
	})
        .error(function (data, status, headers, config){
          $scope.simpleGetCallResult = logResult('GET ERROR', data, status, headers, config);
		console.log(data); 
		console.log('ERRRORORORORO'); 
        });
  });
/*    .success(function(data) {
	$scope.names = data.time;
	console.log($scope.names);  
    })
    .error(function (data, status, headers, config){
	$scope.error = true;
	console.log(data);
	$scope.simpleGetCallResult = logResult('GET ERROR', data, status, headers, config);
    });*/

