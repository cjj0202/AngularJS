'use strict';

angular.module('ajsApp')
	.controller('DrawCtrl', function(){	
	})
	.directive('chartDraw',[ function() {
		return {
			link: function(scope, iElement) {
				scope.$on('tag_USD', function(event, data) {
					console.log('inside'+data);
				      	var context = iElement[0].getContext('2d');
					context.fillStyle = '#0000FF';
					var counter = data;
					var i = setInterval(function(){
					    context.fillRect(150,400,50,-(data-counter));
					    counter--;
					    if(counter === 0) {
						clearInterval(i);
					    }
					}, 4);					
						
				});
				scope.$on('tag_Grams', function(event, data) {
					console.log('inside'+data);
				      	var context = iElement[0].getContext('2d');
					context.fillStyle = '#0099FF';
					var counter = data;
					var i = setInterval(function(){
					    context.fillRect(350,400,50,-(data-counter));
					    counter--;
					    if(counter === 0) {
						clearInterval(i);
					    }
					}, 60);					
						
				});
				}
  			};
	}]); 
