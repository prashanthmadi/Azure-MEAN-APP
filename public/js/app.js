 (function(){
	var app = angular.module("giveCampaign",['ngRoute']);

	app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {

		$routeProvider.when('/donorlist', {templateUrl:"templates/donorlist.html",controller:'RecentDonorController'}).when('/receivertrans',{templateUrl:"templates/receiver.html",controller:'RecentRequestController'}).otherwise({redirectTo: '/abc'});
		$locationProvider.hashPrefix('!').html5Mode(true);
	}]);

	var recentDonorListUrl ="/api/recentdonorlist";
	app.controller('RecentDonorController', function($scope, $http) {
		var context = this;
		context.recentTransactions = [];
        $http.get(recentDonorListUrl)
                .success(function(response) {
                    context.recentTransactions= response;
                });
	});

	var recentReqListUrl ="/api/recentgiverequest";
	app.controller('RecentRequestController', function($scope, $http) {
		var context = this;
		context.recentTransactions = [];
        $http.get(recentReqListUrl)
                .success(function(response) {
                    context.recentTransactions= response;
                });
	});

	app.controller('ReceiverController',function(){
		
	});

 })();


