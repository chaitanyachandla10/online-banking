	app.controller('login',function($scope,$state,$http)
	{	
	$scope.login=function()
{
	$http
	({
		method:'GET',
		url:'/login',
		params:
		{
			email : $scope.email,
			password : $scope.password
		}
	})
.then(function(response)
	{
		console.log(">>>>>>. response data",response.data)
		document.cookie = "email=" + response.data.mail;
		console.log("cookie" , document.cookie)
    // $scope.showLoader = false;
		$state.go('home' , {xyz : response.data});
	})
}
});