app.factory("homeFactory", ["$http", function($http){
	
	var homeFactory = {}; //This is the object
	var firebase ="https://dogspace.firebaseio.com/"
	homeFactory.dogArr = [];


	homeFactory.addDog = function(dog){
		//$http.post("url", {object}).success(function(res as javascript object){});
		$http.post(firebase + ".json", dog).success(function(res){
			dog._id = res.name;
			homeFactory.dogArr.push(dog);
		});
	}
	

	//get all dogs from the database on page load
	$http.get(firebase + ".json").success(function(res){
		for(var prop in res){
			res[prop]._id = prop;
			homeFactory.dogArr.push(res[prop]);
		}
	})

	homeFactory.deleteDog = function(dog){
		$http.delete(firebase + dog._id + "/.json").success(function(res){
			var index = homeFactory.dogArr.indexOf(dog);
			homeFactory.dogArr.splice(index, 1);
			homeFactory.dogArr = 0;
			console.log("Successfully Deleted a dog!");
		})
	}

	return homeFactory;

	
	console.log("homeFactory running");

}]);

//

//FACTORY IS CONSTANT, once instantiated, exists for life of that page until you refresh. So runs once.
//Factory is a giant object, sitting in memory that you can access
//Service is giant constructor function
//Factories and services are built on top of providers. Providers are configurable.
//Providers are only there for mandatory testing on extreme level
//FACTORIES, SERVICES, RESOURCES, AND PROVIDERS = They are all providers or services

//reference type if an array. Reference is getting from memory
//value is something.