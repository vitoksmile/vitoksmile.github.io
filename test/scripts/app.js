angular.module('testingApp', [])

.controller('testingSystemController', function($scope) {
	var tests = [
		{
			'id': 8,
			'title': 'Який із цих регістрів спеціальних функцій не має відношення до портів?',
			'answers': ['DDR', 'PORT', 'PIN', 'UBRR'],
			'correct': 'UBRR',
			'answer': ''
		},
		{
			'id': 9,
			'title': 'Який із цих регістрів використовується для задання напрямку передачі даних для порту А?',
			'answers': ['DDRA', 'PORTA', 'PINA', 'UBRR'],
			'correct': 'DDRA',
			'answer': ''
		},
		{
			'id': 10,
			'title': 'Який із цих регістрів використовується для виводу даних у порт А?',
			'answers': ['DDRA', 'PORTA', 'PINA', 'UBRR'],
			'correct': 'PORTA',
			'answer': ''
		},
		{
			'id': 11,
			'title': 'Який із цих регістрів використовується для вводу даних з порту А?',
			'answers': ['DDRA', 'PORTA', 'PINA', 'ADDR'],
			'correct': 'PINA',
			'answer': ''
		},
		{
			'id': 12,
			'title': 'Який режим роботи виводів порту А, якщо в регістрі DDRA записано значення 00111111?',
			'answers': ['Розряди 0..5 виходи, решта - входи', 'Розряди 0..5 входи, решта - виходи', 'Усі порти на вивід', 'Усі порти на ввід'],
			'correct': 'Розряди 0..5 виходи, решта - входи',
			'answer': ''
		},
		{
			'id': 13,
			'title': 'Яка дія виконується даним рядком коду? PORTA = 0xFF;',
			'answers': ['На виході порту А усюди будуть 1', 'Напрям передачі даних встановлено на вивід', 'Напрям передачі даних встановлено на ввід', 'Записування значення з порту А у змінну Х'],
			'correct': 'На виході порту А усюди будуть 1',
			'answer': ''
		},
		{
			'id': 14,
			'title': 'Яка дія виконується даним рядком коду? DDRA = 0xFF;',
			'answers': ['На виході порту А усюди будуть 1', 'Напрям передачі даних встановлено на вивід', 'Напрям передачі даних встановлено на ввід', 'Записування значення з порту А у змінну Х'],
			'correct': 'Напрям передачі даних встановлено на вивід',
			'answer': ''
		},
		{
			'id': 15,
			'title': 'Яка дія виконується даним рядком коду? X = PINA;',
			'answers': ['На виході порту А усюди будуть 1', 'Напрям передачі даних встановлено на вивід', 'Напрям передачі даних встановлено на ввід', 'Записування значення з порту А у змінну Х'],
			'correct': 'Записування значення з порту А у змінну Х',
			'answer': ''
		},
		{
			'id': 16,
			'title': 'Таймери якої розрядності присутні у більшості моделей МК AVR?',
			'answers': ['4', '8', '10', '12'],
			'correct': '8',
			'answer': ''
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
	/*
	$scope.tests = [];
	for (var i=0; i<20; i++) {
		$scope.tests.push(tests[i]);
	}
	*/
	$scope.tests = tests;
	
	$scope.result = {
		'mark': 0,
		'total': 0,
		'done': 0,
		'finished': false,
		'error': []
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
		var total = $scope.tests.length;
		var done = 0;
		var error = [];
		
		for (var i=0; i<total; i++) {
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
						mark++;
					} else {
						error.push({'test': test, 'index': i+1});
					}
				} else {
					error.push({'test': test, 'index': i+1});
				}
				if (test.answer.length > 0) {
					done++;
				}
			} else {
				if (test.answer == test.correct) {
					mark++;
				} else {
					error.push({'test': test, 'index': i+1});
				}
				if (test.answer.length > 0) {
					done++;
				}
			}
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
			'finished': true,
			'error': error
		};
	}
	
	$scope.reset = function() {
		location.reload();
	}
});