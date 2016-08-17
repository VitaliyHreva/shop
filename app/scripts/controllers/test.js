'use strict';

angular.module('App')
  .controller('TestCtrl', ['$scope', '$http', 'ngDialog', function ($scope, $http, ngDialog) {
  	$http.get('data/question.json').success(function(data) {
    	$scope.questions = data;
    	$scope.setCurrentQuestion();
			$scope.removeQuestion();
    	$scope.showModal('views/question.html');
    	$scope.checkIfHasCorrectAnswer();
  	});

  	$scope.setCurrentQuestion = function () {
  		var randomIndex = Math.floor(Math.random()*$scope.questions.length)
      $scope.currentQuestion = $scope.questions[randomIndex];
  	};

  	$scope.removeQuestion = function () {
  		var indexOfQuestion = $scope.questions.indexOf($scope.currentQuestion);
    	$scope.questions.splice(indexOfQuestion, 1);
  	};

		$scope.alredyFinished = function () {
			return $scope.questions.length <= 0;
		};
		$scope.noCorrectAnswer = null;
		$scope.checkIfHasCorrectAnswer = function () {
			var answers = $scope.currentQuestion.answers.map(function (answer) { return answer.is_correct });
			$scope.noCorrectAnswer = answers.indexOf(true) < 0; 
		};

		

		$scope.answering = function (answer) {
			if (answer) { 
				if ($scope.alredyFinished()) {
					$scope.showModal('views/congratulations.html');
				} else {
					$scope.setCurrentQuestion();
					$scope.removeQuestion();
					$scope.checkIfHasCorrectAnswer();
				}
			} else {
				$('.ngdialog-content').css('background-color', '#ff3019');
				setTimeout(function() {
        	$('.ngdialog-content').css('background-color', '#f0f0f0');
    		}, 1500);
			};
		};

		$scope.showModal = function (template) {
			ngDialog.close()
			ngDialog.open({
				template: template,
				className: 'ngdialog-theme-default',
				scope: $scope
			});
		}
  }]);
