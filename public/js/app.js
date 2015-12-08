 (function(){
	var app = angular.module("giveCampaign",['ngRoute']);

	app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {

		$routeProvider.when('/donorlist', {templateUrl:"templates/donorlist.html",controller:'RecentDonorController'}).when('/receivertrans',{templateUrl:"templates/receiver.html",controller:'RecentRequestController'}).when('/wishrequest', {templateUrl:"templates/wishrequest.html",controller:'WishRequestController'}).otherwise({redirectTo: '/receivertrans'});
		$locationProvider.hashPrefix('!').html5Mode(true);
	}]);

	var recentDonorListUrl ="/api/gifteditems";
	app.controller('RecentDonorController', function($scope, $http) {
		var context = this;
		context.recentTransactions = [];
        $http.get(recentDonorListUrl)
                .success(function(response) {
                    context.recentTransactions= response;
                });
	});

	var recentReqListUrl ="/api/wishlist";
	app.controller('RecentRequestController', function($scope, $http) {
		var context = this;
		context.recentTransactions = []; 
        $http.get(recentReqListUrl)
                .success(function(response) {
                    context.recentTransactions= response;
                });
	});


	var wishReqUrl ="/api/wishrequest";
	app.controller('WishRequestController', ['$scope','$http', function($scope,$http) {
      $scope.master = {};

      $scope.update = function(user) {
      	$http.post(wishReqUrl, user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);

 })();


