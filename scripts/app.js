angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function(){
		console.log("this is the hello world controller function in the mainCtrl!");
	};

	// each element in the array are a JS object with a key value
	$scope.todos = [
		{"name": "clean the house"},
		{"name": "feed the cat"},
		{"name": "shop some clothes"},
		{"name": "go to the gym"},
		{"name": "read a book"},
	]
});

// .controller('coolCtrl', function($scope){
// 	$scope.whoAmI = function(){
// 		console.log("hello there. this is the coolCtrl function!");
// 	}

// 	$scope.helloWorld = function() {
// 		console.log("this is not the main ctrl");
// 	}
// })

// .controller('imASibling', function($scope) {
// 	$scope.foobar = 1234; 

// 	// do other cool stuff

// });