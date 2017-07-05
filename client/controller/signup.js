app.controller('signup',function($scope,$state,$http)
{
$scope.signup=function()
{
	$http
	({
		method:'POST',
		url:'/signup',
		params:
		{
			username : $scope.uname,
			password : $scope.password
		}
	})
	.then(function(response)
	{
     console.log("data sent in ",response);
	})
}
})
