var routerApp = angular.module('BookApp',['ui.router'])

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