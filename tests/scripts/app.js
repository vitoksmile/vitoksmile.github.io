angular.module('testingApp', [])

.controller('testingSystemController', function($scope, $http) {
	var URL = 'https://vitoksmile.github.io/tests/db/';
	$scope.tests = [];
	
	var loadTest = function(test, callback) {
		$http.get(URL + test.src + '.json').success(function(data) {
			$scope.tests.push({
				'title': test.title, 
				'src': test.src, 
				'count': test.count, 
				'data': data
			});
			callback();
		}).error(function(error) {
			callback();
		});
	}
	var index = 0;
	var tests = [];
	var loadTests = function() {
		if (index < tests.length) {
			loadTest(tests[index], function() {
				index++;
				loadTests();
			});
		} else {
			showHome();
		}
	}
	$http.get(URL + 'db.json').success(function(data) {
		if (data.tests.length == 0) {
			return;
		}
		tests = data.tests;
		loadTests();
	});
	
	var shuffle = function(a) {
		for (let i = a.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
	}
	
	var stateNull = 'null';
	var stateHome = 'home';
	var stateTest = 'test';
	var stateResult = 'result';
	$scope.state = stateNull;
	$scope.test = undefined;
	$scope.answer = undefined;
	$scope.number = 0;
	$scope.numbers = [];
	$scope.result = undefined;
	$scope.rating = 0;
	
	var showHome = function() {
		document.getElementById('home').style.display = 'block';
		document.getElementById('test').style.display = 'none';
		document.getElementById('result').style.display = 'none';
		$scope.state = stateHome;
		$scope.test = undefined;
		$scope.answer = undefined;
		$scope.number = 0;
		$scope.numbers = [];
		$scope.result = undefined;
	}
	var showTest = function() {
		document.getElementById('home').style.display = 'none';
		document.getElementById('test').style.display = 'block';
		document.getElementById('result').style.display = 'none';
		$scope.state = stateTest;
	}
	var showResult = function() {
		document.getElementById('home').style.display = 'none';
		document.getElementById('test').style.display = 'none';
		document.getElementById('result').style.display = 'block';
		$scope.state = stateResult;
	}
	$scope.testClicked = function(test, count) {
		if (count > test.data.length) {
			alert('Вибрано занадто багато питань для тесту');
			return;
		}
		showTest();
		
		var d = JSON.parse(JSON.stringify(test.data));
		for (var i=0; i<d.length; i++) {
			shuffle(d);
		}
		var data = [];
		for (var i=0; i<count; i++) {
			$scope.numbers.push((i + 1));
			for(var j=0; j<d[i].answers.length; j++) {
				shuffle(d[i].answers);
			}
			data.push(d[i]);
		}
		$scope.test = JSON.parse(JSON.stringify(test));
		$scope.test.data = data;
		$scope.numberClicked(1);
	}
	$scope.numberClicked = function(number) {
		$scope.number = number - 1;
		$scope.answer = $scope.test.data[number - 1];
	}
	$scope.getNumberClass = function(number) {
		if ($scope.test.data[number - 1].answer.length == 0) {
			return 'number';
		} else {
			return 'numberDone';
		}
	}
	$scope.finish = function() {
		var mark = 0;
		var total = $scope.test.data.length;
		var error = [];
		
		for (var i=0; i<total; i++) {
			var test = $scope.test.data[i];
			
			if (test.answer == test.correct) {
				mark++;
			} else {
				error.push({
					'test': test, 
					'number': i+1
				});
			}
		}
		
		$scope.result = {
			'mark': mark,
			'total': total,
			'error': error
		};
		showResult();
	}
	$scope.getRating = function() {
		if ($scope.resultmark === undefined) {
			return 0;
		}
		return (parseInt($scope.rating) + ($scope.result.mark / $scope.result.total) * 110) / 2;
	}
	$scope.home = function() {
		showHome();
	}
});