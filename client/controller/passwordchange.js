app.controller('passwordchange',function($scope,$state,$http)
{	$scope.submit=function()
	{
		
		$http
		({
		method:'GET',
		url:'/passwordchange',
		params:
		{
			email:$scope.email,
			password:$scope.password,
			newpassword:$scope.newpassword
		}
	})
	.then(function(response)
		{
			alert("Message has been sent");
			$state.go('home');
		
	})
	}
});