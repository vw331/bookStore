/*auther:sunhao creat by2017/07/21*/var routerApp = angular.module('BookApp',['ui.router'])

routerApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/index')

  $stateProvider
  	.state('index', {
  		url: '/index',
  		views: {
  			'': {
  				templateUrl: 'dist/template/home.html'
  			},
  			'main@index': {
  				templateUrl: 'dist/template/login.html'
  			}
  		}
  	})
  	.state('booklist', {
  		url: '/{bookType:[0-9]{1,4}}',
  		views: {
  			'': {
  				templateUrl: 'dist/template/booklist.html'
  			},
  			'booktype@booklist': {
  				templateUrl: 'dist/template/bookType.html'
  			}
  		}
  	})
})
angular.module('BookApp')
	.controller('loginCtrl', function($scope){

		$scope.regist = function(){
			console.log('注册')
		}

		$scope.login = function(){
			console.log('登录')
		}

	})
console.log(2)