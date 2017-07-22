app.controller('details',function($scope,$state)
{	
console.log('details show',$state.params);

	$scope.user= $state.params.abc;


	$scope.username = $state.params.abc.username;
	$scope.address = $state.params.abc.address;
	$scope.pan = $state.params.abc.pan;
	$scope.aadhar = $state.params.abc.aadhar;
	$scope.email = $state.params.abc.email;
	$scope.phone = $state.params.abc.phone;
});