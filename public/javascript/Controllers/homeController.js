app.controller("homeController", [ "$interval", function($interval){
	var vm = this;
	var breakInterval;
	var workInterval;
	vm.page = "Home";

//------Break time--------------------------------------
vm.breakSecs = 0;
vm.breakMins = 0;
vm.breakHrs = 0;

vm.setBreakMins = function(){
	if(vm.breakSecs === 59){
		vm.breakMins += 1;
		vm.breakSecs = 0;
	}
	else{vm.breakSecs += 1;}
};

vm.setBreakHrs = function(){
	if(vm.breakMins === 59 && vm.breakSecs === 59){
		vm.breakHrs += 1;
		vm.breakMins = 0;
	}
};

vm.startBreak = function(){
	breakInterval = $interval(vm.setBreakMins, 1000);
	breakInterval = $interval(vm.setBreakHrs, 1000);
};

//-------Work time------------------------------------------

vm.workSecs = 3;
vm.workMins = 0;
vm.workHrs = 0;

vm.setWorkMins = function(){
	if(vm.workSecs === 0){
		vm.workSecs = 59;

		if(vm.workMins === 0 && vm.workHrs === 0){
			vm.workSecs = 0;
		}

		if(vm.workMins ===0){
			vm.workMins =0;
		}
		else
			{vm.workMins -= 1;}
		
	}
	else {vm.workSecs -=1;}
};

vm.setWorkHrs = function(){
	
	if(vm.workSecs === 0 && vm.workMins === 0 && vm.workHrs === 0){
		vm.startBreak();

	};


	if(vm.workMins === 1 && vm.workSecs === 1){
		
		if(vm.workMins === 0 && vm.workHrs === 0){
			vm.workMins = 0;
		};

		vm.workMins = 59;
		if(vm.workHrs === 0){
			vm.workHrs = 0;
		}
		else{vm.workHrs -= 1};
	};
};


vm.startWork = function(){
	workInterval = $interval(vm.setWorkMins, 1000);
	workInterval = $interval(vm.setWorkHrs, 1000);
};


}]); 










