app.controller('TransferMoney',function($scope,$state,$http)
{
$scope.transfer=function()
{
	$http
	({
		method:'GET',
		url:'/TransferMoney',
		params:
		{
			accountno : $scope.accountno,
			amount : $scope.amount
		}
	})
.then(function(response)
	{
		console.log(">>>>>>. response data",response.data)
		document.cookie = "email=" + response.data.mail;
		console.log("cookie" , document.cookie)
    // $scope.showLoader = false;
		alert("Money Transfer");
	})
}
});