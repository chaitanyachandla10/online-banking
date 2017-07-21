var app = angular.module('app',['ui.router']);

app.config(function($stateProvider)
{
	$stateProvider
	.state('home',{
		url:'home',
		templateUrl:'home.html',
		params:{
				xyz :null
			},
		controller:'home'
		})
	.state('index',{
		url:'index',
		templateUrl:'index.html'
		})
	.state('change',{
		url:'change',
		templateUrl:'change.html',
		controller:'change'
		})
	.state('details',{
		url:'details',
		templateUrl:'details.html',
		params:{
				abc :null
			},
		controller:'details'
		})
	.state('signup',{
		url:'signup',
		templateUrl:'signup.html',
		controller:'signup'
		})
	.state('login',{
		url:'login',
		templateUrl:'login.html',
		controller:'login'
		})
});