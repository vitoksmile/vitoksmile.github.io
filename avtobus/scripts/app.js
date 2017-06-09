var app = angular.module('avtobusApp', [])
.controller('avtobusController', function($scope, $http) {
	$http.get('https://vitoksmile.github.io/avtobus/scripts/db.json').success(function(data) {
		completed(data);
	});
	
	var completed = function(data) {
		var date = new Date();
		$scope.time = date.getHours() * 60 + date.getMinutes();
		var dowB = date.getDay();
		var dowV = date.getDay();
		$scope.noB = false;
		$scope.noV = false;
		var days = ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', "п'ятницю", 'суботу'];
		
		var init = function() {			
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
			
			var bussesB = getBusses(dowB);
			var bussesV = getBusses(dowV);
			var bogo = [];
			var village = [];
			
			for (var i=0; i<bussesB.length; i++) {
				var bus = bussesB[i];
				
				for (var j=0; j<bus.routes.length; j++) {
					var points = bus.routes[j].points;
					
					if (!$scope.noB && points[points.length-1].time - $scope.time < -15) {
						continue;
					}
					
					if (bus.toCity) {
						points.toCity = bus.toCity;
						bogo.push(points);
					}
				}
			}
			for (var i=0; i<bussesV.length; i++) {
				var bus = bussesV[i];
				
				for (var j=0; j<bus.routes.length; j++) {
					var points = bus.routes[j].points;
					
					if (!$scope.noV && points[points.length-1].time - $scope.time < -15) {
						continue;
					}
					
					if (!bus.toCity) {
						points.toCity = bus.toCity;
						village.push(points);
					}
				}
			}
			
			var sort = function(array) {
				array.sort(function(pointsA, pointsB){
					return pointsA[0].time - pointsB[0].time
				});
				return array;
			}
			
			$scope.bogo = sort(bogo);
			$scope.village = sort(village);
		}
		init();
		
		$scope.noBogo = function() {			
			if ($scope.bogo.length == 0) {
				dowB++;
				if (dowB == 7) {
					dowB = 0;
				}
				$scope.noB = true;
				init();
			}
			
			return $scope.noB;
		}
		$scope.noVillage = function() {			
			if ($scope.village.length == 0) {
				dowV++;
				if (dowV == 7) {
					dowV = 0;
				}
				$scope.noV = true;
				init();
			}
			
			return $scope.noV;
		}
		$scope.noBogoDay = function() {
			return days[dowB];
		}
		$scope.noVillageDay = function() {
			return days[dowV];
		}
	}
	
	$scope.isBoldTitle = function(points, point) {
		var index = points.indexOf(point);
		return index == 0 || index == points.length - 1;
	}
	$scope.isWaiting = function(point) {
		return point.time < 0;
	}
	$scope.timeLeftToString = function(points, point) {
		var timeLeft = point.time - $scope.time;
		
		if (points.toCity) {
			if ($scope.noB) {
				timeLeft += 24 * 60;
			}
		} else {
			if ($scope.noV) {
				timeLeft += 24 * 60;
			}
		}
		
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