app.controller('TransferMoney',$scope,$state,$http)
{
$scope.details=function()
{
	$state.go('details');
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