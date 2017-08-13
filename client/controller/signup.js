app.controller('signup',function($scope,$state,$http)
{
	
$scope.signup=function()
{
    var x; 
	$http
	({
		method:'POST',
		url:'/signup',
		params: 
		{
			username : $scope.uname,
			password : $scope.password,
			address	:$scope.address,
			email:$scope.address,
			phone:$scope.phoneno,
			pan:$scope.pan,
			aadhar:$scope.aadhar,
			AccountBala:1000,
			Bankacc:myFunction(x)

		}
	})
	.then(function(response)
	{
     console.log("data sent in ",response.data);
     $state.go('login');
	})
}
})
	function myFunction(x) 
		{
			
    		 return(Math.floor((Math.random() * 1000000) + 1))
		}