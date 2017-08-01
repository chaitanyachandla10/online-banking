app.controller('feedback',function($scope,$state,$http)
{
	$scope.feedback=function()
	{
		$http
		({
		method:'GET',
		url:'/feedback',
		params:
		{
			message:$scope.message
		}
	})
	.then(function(response)
		{
			alert("Message has been sent");
		
	})
	}
});