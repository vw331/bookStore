angular.module('BookApp')
	.controller('loginCtrl', function($scope){

		$scope.regist = function(){
			console.log('注册')
		}

		$scope.login = function(){
			console.log('登录')
		}

	})