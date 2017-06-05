(function(){
	
	'user strict';

	
	//Declare modules
	angular.module('firstPage',[]);
	angular.module('secondPage',[]);
	angular.module('thirdPage',[]);
	angular.module('fourthPage',[]);
		
	//Configure
	app=angular.module('mainApp',[
		'firstPage',
		'secondPage',
		'thirdPage',
		'fourthPage',
		'ngRoute'
	])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/firstPage',{
				templateUrl: 'modules/firstPage/firstView.html'
			})
			.when('/secondPage',{
				templateUrl: 'modules/secondPage/secondView.html'
			})
			.when('/thirdPage',{
				templateUrl: 'modules/thirdPage/thirdView.html',
				controller: 'pageControllerThree'
			})
			.when('/fourthPage',{
				templateUrl: 'modules/fourthPage/fourthView.html',
			})
			.otherwise ({redirectTo: 'modules/firstPage/firstView.html'});
	}])
	/*run(function($location){
		$location.path('/fourthPage');
	});*/
	
	app.controller('appCtrl',function($scope){});

})();