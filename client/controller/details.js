app.controller('details',function($scope,$state,$http)
{	
console.log('loggedin successfully' , $state.params);

	$scope.user= $state.params.xyz;


	$scope.username = $state.params.xyz.username;
	$scope.address = $state.params.xyz.address;
	$scope.pan = $state.params.xyz.pan;
	$scope.aadhar = $state.params.xyz.aadhar;
	$scope.email = $state.params.xyz.email;
	$scope.phone = $state.params.xyz.phone;
});