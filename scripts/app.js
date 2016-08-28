angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
	$scope.helloworld = function(){
		console.log("this is the hello world controller function in the mainCtrl!");
	}
}); 