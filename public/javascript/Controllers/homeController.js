app.controller("homeController", [ "$interval","$timeout" , function($interval, $timeout){
	var vm = this;
	var interval;
	vm.page = "Home";



	/*function timeConstructor(secs, mins, hrs) {
		this.secs = secs;
		this.mins = mins;
		this.hrs = hrs;
	};

	var zero = new timeConstructor(0, 0, 0);
	*/
	vm.secs = 0;
	vm.mins = 0;
	vm.hrs = 0;


	vm.setTime = function(){
		if(vm.secs === 60){
			vm.mins += 1;
			vm.secs = 0;
		}
		else{vm.secs += 1;}

		if(vm.mins === 60){
			vm.hrs += 1;
			vm.mins = 0;
		}
		else{vm.mins +=1;}
	};
	


	vm.tick = function(){
		interval = $interval(vm.setTime, 1000);
	};

}]); 

	//vm.timerAtZeroSecs = 0;
	//vm.timerAtZeroMins = 0;
	//vm.timerAtSixty = 60;

//-------------Working----------------	

/*vm.incrementSecs = function() {
	vm.timerAtZeroSecs += 1;
};
vm.incrementMins = function() {
	vm.timerAtZeroMins += 1;
};

vm.startSecs = function() {
	interval = $interval(vm.incrementSecs, 1000);
};

vm.startMins = function() {
	timeout = $timeout(vm.incrementMins, 60000);
	interval = $interval(vm.incrementMins, 60000);
};

vm.startTime = function() {
	vm.startSecs();
	vm.startMins();
};

//-------------Break----------------	
vm.decrementTime = function() {
	vm.timerAtSixty-= 1;
};

vm.decTime = function(){
	interval = $interval(vm.decrementTime, 1000)
};*/








