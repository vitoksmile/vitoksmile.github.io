angular.module('testingApp', [])

.controller('testingSystemController', function($scope) {
	var tests = [
		{
			'title': 'Який із цих регістрів використовується для задання напрямку передачі даних для порту А?',
			'answers': ['DDRA', 'PORTA', 'PINA', 'ADDR'],
			'correct': 'DDRA',
			'answer': '',
			'mark': 1
		},
		{
			'title': 'Який із цих регістрів використовується для виводу даних у порт А?',
			'answers': ['DDRA', 'PORTA', 'PINA', 'ADDR'],
			'correct': 'PORTA',
			'answer': '',
			'mark': 1
		},
		{
			'title': 'Який із цих інтерфейсів є асинхронним (не має лінії тактування)?',
			'answers': ['SPI', 'I2C', 'UART', 'USB', '1-Wire', 'CAN'],
			'correct': ['UART', 'USB', '1-Wire', 'CAN'],
			'answer': [],
			'mark': 2
		},
		{
			'title': 'Який із цих інтерфейсів є синхронним (має лінію тактування)?',
			'answers': ['SPI', 'I2C', 'UART', 'USB', '1-Wire', 'CAN'],
			'correct': ['SPI', 'I2C'],
			'answer': [],
			'mark': 2
		}
	];
	
	function shuffle(a) {
		for (let i = a.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
	}
	shuffle(tests);
	for (var i=0; i<tests.length; i++) {
		shuffle(tests[i].answers);
	}
	$scope.tests = tests;
	
	$scope.result = {
		'mark': 0,
		'total': 0,
		'done': 0,
		'finished': false
	};
	
	$scope.isMultiAnswer = function(testIndex) {
		return Array.isArray($scope.tests[testIndex].answer);
	}
	
	$scope.multiAnswer = function(testObject, answerIndex) {
		var test = $scope.tests[$scope.tests.indexOf(testObject)];
		var answer = test.answers[answerIndex];
		
		if (!Array.isArray(test.answer)) {
			alert('Помилка системи...');
			return;
		}
		
		if (test.answer.indexOf(answer) > -1) {
			$scope.tests[$scope.tests.indexOf(testObject)].answer.splice(test.answer.indexOf(answer), 1);
		} else {
			$scope.tests[$scope.tests.indexOf(testObject)].answer.push(answer);
		}
	}
	
	$scope.finish = function() {
		var mark = 0;
		var total = 0;
		var done = 0;
		
		for (var i=0; i<$scope.tests.length; i++) {
			var test = $scope.tests[i];
			
			if (Array.isArray(test.answer)) {
				if (test.answer.length == test.correct.length) {
					var t = 0;
					
					for (var j=0; j<test.answer.length; j++) {
						for (var k=0; k<test.correct.length; k++) {
							if (test.answer[j] == test.correct[k]) {
								t++;
							}
						}
					}
					
					if (t == test.answer.length) {
						mark += test.mark;
					}
				}
				if (test.answer.length > 0) {
					done++;
				}
			} else {
				if (test.answer == test.correct) {
					mark += test.mark;
				}
				if (test.answer.length > 0) {
					done++;
				}
			}
			
			total += test.mark;
		}
		
		if (done != $scope.tests.length) {
			alert('Дайте відповіді на усі питання!');
			return;
		}
		
		var percent = (mark/total)*100;
		var color = '#FFFFFF';
		if (percent >= 90) {
			color = '#8BC34A';
		} else if (percent >= 75) {
			color = '#FFEB3B';
		} else if (percent >= 60) {
			color = '#90CAF9';
		} else {
			color = '#F44336';
		}
		document.getElementById('body').style.backgroundColor = color;
		
		$scope.result = {
			'mark': mark,
			'total': total,
			'done': done,
			'finished': true
		};
	}
	
	$scope.reset = function() {
		location.reload();
	}
});