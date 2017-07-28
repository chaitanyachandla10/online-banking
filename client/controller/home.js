app.controller('home',function($scope,$state,$http)
{	
	$scope.details=function()
	{
		$http
		({
		method:'GET',
		url:'/home',
		params:
		{
			email :$state.params.xyz.email
		}
	})
	.then(function(response)
		{
				$state.go('details',{abc: response.data});
		})
	}

console.log('loggedin successfully',$state.params);

	$scope.user= $state.params.xyz;


	$scope.username = $state.params.xyz.username;
	$scope.email = $state.params.xyz.email;
	$scope.Bankacc = $state.params.xyz.Bankacc;
	$scope.AccountBala = $state.params.xyz.AccountBala;

	$scope.Money=function()
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
				$state.go('TransferMoney',{xyz : response.data});
		})
	}

		$scope.History=function()
	{
		$state.go("TranscationHistory");
	}
		$scope.Balance=function()
	{
		$state.go("home");
	}
	$scope.feedback=function()
	{
		$state.go("feedback");
	}
});