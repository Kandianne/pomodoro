pp.controller("profileController", ["homeService",function(homeService) {
	var vm = this;
	vm.page = "Profile";
	console.log("Running profile");
	vm.dog = homeService.dog;

}]);