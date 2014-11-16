'use strict';

angular.module('ajsApp')
	.controller('DrawCtrl', function(){
		
	})
	.directive('chartDraw',[ function() {
		return {
			link: function(scope, iElement) {
			var l;
			scope.$on('tag', function(event, data) {
			l = data;
			console.log('inside'+l);
		      	var context = iElement[0].getContext('2d');
			context.fillStyle = '#0000FF';
		    	context.fillRect(50,12,50,l);
		});
			}
  		};
	}]); 
