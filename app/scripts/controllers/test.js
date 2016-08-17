'use strict';

angular.module('App')
  .controller('TestCtrl', ['$scope', '$http', 'ngDialog', function ($scope, $http, ngDialog) {
  	$http.get('data/question.json').success(function(data) {
    	$scope.questions = data;
    	$scope.setCurrentQuestion();
    	//as we define current question we can remove it from array
			$scope.removeQuestion();
    	$scope.showModal('views/question.html');
  	});

  	$scope.setCurrentQuestion = function () {
  		//so in this place you can once define question
  		//not need duplication
  		var randomIndex = Math.floor(Math.random()*$scope.questions.length)
      $scope.currentQuestion = $scope.questions[randomIndex];
  	};

  	//so if we should use removing after each aswering we should remove logic move to method
  	$scope.removeQuestion = function () {
  		//we remove question - no duplication in future
  		var indexOfQuestion = $scope.questions.indexOf($scope.currentQuestion);
    	$scope.questions.splice(indexOfQuestion, 1);
  	};

		$scope.alredyFinished = function () {
			return $scope.questions.length <= 0;
		};

		$scope.noCorrectAnswer = function () {

			console.log($scope.currentQuestion.answers)
		};

		$scope.answering = function (answer) {
			// ну якщо всі відповід будуть повертати   no то аншо ти тут пише ту перевіру?
			if (answer.toLowerCase() == 'yes') {
				if ($scope.alredyFinished()) {
					//close current dialog window
					//show modal window with congratulations!
					$scope.showModal('views/congratulations.html');
				} else {
					//we change only question without close/open new dialog!
					//we should to get first question or random, so in $scpoe.qiestion we should not have answered question!
					$scope.setCurrentQuestion();
					//as we define new current question we should remove it from array
					$scope.removeQuestion();
					$scope.noCorrectAnswer();
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
