var app = angular.module('myApp', [])
app.controller('madLibsController', function($scope) {
	$scope.maleName = '<some name>';
	$scope.dirtyTask = '<dirty task>';
	$scope.obnoxCeleb = '<obnoxious celebrity>';
	$scope.jobTitle = '<job title>';
	$scope.celeb = '<celebrity>';
	$scope.hugeNum = '<huge number>';
	$scope.tediousTask = '<tedious task>';
	$scope.uselessSkill = '<useless skill>';
	$scope.adjective = '<adjective>';
});