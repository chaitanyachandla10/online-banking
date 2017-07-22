app.controller('home',function($scope,$state,$http)
{	
console.log('loggedin successfully',$state.params);

	$scope.user= $state.params.xyz;


	$scope.username = $state.params.xyz.username;
	$scope.email = $state.params.xyz.email;
	$scope.Bankacc = $state.params.xyz.Bankacc;
	$scope.AccountBala = $state.params.xyz.AccountBala;
$scope.details=function()
	{
		$state.go("details");
	}
	
	$scope.Money=function()
	{
		$state.go("TransferMoney");
	}
		$scope.History=function()
	{
		$state.go("TranscationHistory");
	}
		$scope.Balance=function()
	{
		$state.go("home");
	}
});