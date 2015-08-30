//asigning module as app to connect to other pages
var app = angular.module("app", ["ui.router"])

// Configuartion for our app with two dependencies to behave properly. 1. $stateProvider 2. $urlRouterProvider
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/"); //Automatically redirects to "/" aka home page
	$stateProvider
	.state("Home", {
		url: "/",
		templateUrl: "javascript/views/home.html",
		controller: "homeController",
		controllerAs: "vm"
	})
})

