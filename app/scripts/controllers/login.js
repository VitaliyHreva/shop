'use strict'

angular.module('App')
  .controller('LoginCtrl', ['$scope', 'validationService', '$location', function ($scope, validationService, $location) {

    $scope.login = function () {
      var response = validationService.onLogin($scope.user)
      if (response.status == 200) {
        $location.path('/shop');
      } else {
        $scope.validationMessages = response.messages;
        $scope.userForm.login.$invalid = true;
        $scope.userForm.password.$invalid = true;
      }
    }
    $scope.submitForm = function () {

      var resp = validationService.onSignUp($scope.user)
      if (resp.status == 200) {
        $location.path('/shop')
       } else { 
        $scope.validationMessages = resp.messages;
        $scope.userForm.username.$invalid = resp.messages['username'] != null;
        $scope.userForm.email.$invalid = resp.messages['email'] != null;
        $scope.userForm.phone.$invalid = resp.messages['phone'] != null;
      }
    };

	}]);