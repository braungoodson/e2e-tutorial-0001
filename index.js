var app = angular.module('app',[]);

app.controller('alertsController',['$scope',function($scope){
	$scope.alerts = {
		success: {
			message: "Success!",
			hide: true
		},
		info: {
			message: "Info!",
			hide: true
		},
		warning: {
			message: "Warning!",
			hide: true
		},
		danger: {
			message: "Danger!",
			hide: true
		}
	};
	$scope.counter = 1;
	$scope.alert = function () {
		switch ($scope.counter) {
			case 0 : 
				$scope.counter++;
				$scope.alerts.success.hide = false;
				$scope.alerts.info.hide = true;
				$scope.alerts.warning.hide = true;
				$scope.alerts.danger.hide = true;
			break;
			case 1 : 
				$scope.counter++;
				$scope.alerts.success.hide = true;
				$scope.alerts.info.hide = false;
				$scope.alerts.warning.hide = true;
				$scope.alerts.danger.hide = true;
			break;
			case 2 : 
				$scope.counter++;
				$scope.alerts.success.hide = true;
				$scope.alerts.info.hide = true;
				$scope.alerts.warning.hide = false;
				$scope.alerts.danger.hide = true;
			break;
			case 3 : 
				$scope.counter = 0;
				$scope.alerts.success.hide = true;
				$scope.alerts.info.hide = true;
				$scope.alerts.warning.hide = true;
				$scope.alerts.danger.hide = false;
			break;
		}
	}
	$scope.alert();
}]);