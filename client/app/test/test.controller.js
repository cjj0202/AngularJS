'use strict';

angular.module('ajsApp')
  .controller('TestCtrl', function ($scope) {
    $scope.todoList = [{todoText:'Feed Bunny', done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = '';
    };
    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
		if (!x.done) {
			$scope.todoList.push(x);
		}
	});
    };
  });

