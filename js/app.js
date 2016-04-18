var app = angular.module('myApp', [])
app.controller('madLibsController', function($scope) {
	$scope.reset = function() {
		$scope.male = false;
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
});