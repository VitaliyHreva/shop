'use strict';

angular.module('App')
.factory('validationService', function () {
	return {
		// usernames: ['vitalik', 'dima'],
		// emails: ['vitalik@ex.com', 'dima@ex.com'],
		// phones: ['+380639900009', '+380935566444']
		onLogin: function (user) {
			if (user.login == 'vitalik' &&  user.password == '12345' ) {
				return {status: '200', message: 'succses'}
			} else {
				return {status: '401', message: 'Incorrect username or password!'}
			}
		},
		onSignUp: function (user) {
			var code = 409
			var messages = {}

			if (['vitalik', 'dima'].indexOf(user.username) >= 0) {
				messages['username'] = 'Username already in use'
			} else if (['vitalik@ex.com', 'dima@ex.com'].indexOf(user.email) >= 0) {
				messages['email'] = 'Email already in use'
			} else if (['+380639900009', '+380935566444'].indexOf(user.phone) >= 0) {
				messages['phone'] = 'Phone already in use'
			} else {
				code = 200
			}

			return {status: code, messages: messages}
		}
	}
});
