var app = angular.module('myApp', [])
app.controller('madLibsController', function($scope) {
	$scope.reset = function() {
		$scope.isMale = false;
        $scope.charName = null;
	    $scope.dirtyTask = null;
	    $scope.obnoxCeleb = null;
	    $scope.jobTitle = null;
		$scope.celeb = null;
		$scope.hugeNum = null;
		$scope.tediousTask = null;
		$scope.uselessSkill = null;
		$scope.adjective = null;
		$scope.showMadLibs = false;
	}
	$scope.reset();

	$scope.submit = function(){
        if ($scope.myForm.$valid) {
        	$scope.showMadLibs = true;
            console.log("Form is valid");
        }
        else {
        	console.log("Form is invalid");
        }
}
});