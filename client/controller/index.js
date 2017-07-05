var app = angular.module('app',['ui.router']);

app.config(function($stateProvider)
{
	$stateProvider
	.state('home',
	{
		url:'home',
		templateUrl:'home.html'
		})
	.state('index',{
		url:'index',
		templateUrl:'index.html'
		})
	.state('signup',{
		url:'signup',
		templateUrl:'signup.html',
		controller:'signup'
		})
	.state('login',{
		url:'login',
		templateUrl:'login.html'
		})
});