var app = angular.module('avtobusApp', [])
.controller('avtobusController', function($scope, $http) {
	$http.get('https://vitoksmile.github.io/avtobus/scripts/db.json').success(function(data) {
		completed(data);
	});
	
	var completed = function(data) {
		var date = new Date();
		//$scope.time = date.getHours() * 60 + date.getMinutes();
		$scope.time = 8 * 60 + 25;
		
		var getBusses = function(dow) {
			if(dow >= 1 && dow < 6){
				return data['days'][0]['busses'];
			}
			if(dow == 6){
				return data['days'][1]['busses'];
			}
			if(dow == 0){
				return data['days'][2]['busses'];
			}
		}
		var busses = getBusses(date.getDay());
		var bogo = [];
		var village = [];
		
		for (var i=0; i<busses.length; i++) {
			var bus = busses[i];
			
			for (var j=0; j<bus.routes.length; j++) {
				var points = bus.routes[j].points;
				
				if (points[points.length-1].time - $scope.time < 0) {
					continue;
				}
				
				if (bus.toCity) {
					bogo.push(points);
				} else {
					village.push(points);
				}
			}
		}
		
		$scope.bogo = bogo;
		$scope.village = village;
	}
	
	$scope.isBoldTitle = function(points, point) {
		var index = points.indexOf(point);
		return index == 0 || index == points.length - 1;
	}
	$scope.timeLeftToString = function(point) {
		var timeLeft = point.time - $scope.time;
		var hours = parseInt(timeLeft / 60, 10);
		var minutes = parseInt(timeLeft % 60, 10);
		
		if (timeLeft >= 0) {
			if (timeLeft == 0) {
				return 'уже';
			} else if (minutes == 0 && hours > 0) {
				return 'через ' + hours + ' год';
			} else if (hours == 0) {
				return 'через ' + minutes + ' хв';
			} else {
				return 'через ' + hours + ' год і ' + minutes + ' хв';
			}
		} else {
			hours *= (-1);
			minutes *= (-1);
			
			if (minutes == 0) {
				return hours + ' год тому';
			} else if (hours == 0) {
				return minutes + ' хв тому';
			} else {
				return hours + ' год і ' + minutes + ' хв тому';
			}
		}
	}
	$scope.timeToString = function(point) {
		var time = point.time;
		var hours = parseInt(time / 60, 10);
		var minutes = parseInt(time % 60, 10);
		
		if(hours < 10){
			hours = '0' + hours;
		}
		if(minutes < 10){
			minutes = '0' + minutes;
		}
		
		return hours + ':' + minutes;
	}
});