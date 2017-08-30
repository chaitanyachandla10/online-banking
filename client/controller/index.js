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

	.state('TransferMoney',{
		url:'TransferMoney',
		templateUrl:'TransferMoney.html',
		controller:'TransferMoney'
		})

	.state('TranscationHistory',{
		url:'TranscationHistory',
		templateUrl:'TranscationHistory.html',
		controller:'TranscationHistory'
		})

	.state('/facebook/:token',{
		 url:'homefacebook',
		templateUrl:'home.html',
		params:{
				xyz :null
			},
		controller:'home'
		})

    .state('/twitter/:token', {
		 url:'home',
		templateUrl:'home.html',
		params:{
				xyz :null
			},
		controller:'home'
		})

    // Route: Google Callback Result
    .state('/google/:token', {
		 url:'home',
		templateUrl:'home.html',
		params:{
				xyz :null
			},
		controller:'home'
		})

	.state('details',{
		url:'details',
		templateUrl:'details.html',
		params:{
				abc:null
			},
		controller:'details'
		})

	.state('signup',{
		url:'signup',
		templateUrl:'signup.html',
		controller:'signup'
		})

	.state('passwordchange',{
		url:'passwordchange',
		templateUrl:'passwordchange.html',
		controller:'passwordchange'
		})

	.state('login',{
		url:'login',
		templateUrl:'login.html',
		params:{
				xyz :null
			},
		controller:'login'
		})

	.state('feedback',{
		url:'feedback',
		templateUrl:'feedback.html',
		controller:'feedback'
		})

	.state('logout',{
		url:'logout',
		templateUrl:'feedback.html',
		controller:'logout'
		})
});