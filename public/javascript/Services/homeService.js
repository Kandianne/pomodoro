//angular.module('app')
/*or this can just be "app" since we defined (set) it earlier. 
the text above is better because scope is global.*/
app.service('homeService', [function(homeService){
	this.dog = {
		color: "yellowish",
		breed: "Golden Retriever",
		isDumb: "very"
	}

}])
